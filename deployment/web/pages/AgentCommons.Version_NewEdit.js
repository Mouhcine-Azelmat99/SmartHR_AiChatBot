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
import { MicroflowObjectProperty } from "mendix/MicroflowObjectProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
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
import { Text } from "mendix/widgets/web/Text";
import { TextArea } from "mendix/widgets/web/TextArea";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $TextBox, $TextArea, $Combobox, $Container, $ConditionalVisibilityWrapper, $Text, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, TextArea, Combobox, Container, ConditionalVisibilityWrapper, Text, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.AgentCommons.Version_NewEdit.layoutGrid1"
        $widgetId="p.AgentCommons.Version_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.AgentCommons.Version_NewEdit.layoutGrid1$row0"
                $widgetId="p.AgentCommons.Version_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.AgentCommons.Version_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p.AgentCommons.Version_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.AgentCommons.Version_NewEdit.dataView1"
                                $widgetId="p.AgentCommons.Version_NewEdit.dataView1"
                                class={"mx-name-dataView1 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.13",
                                    "scope": "$Version",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p.AgentCommons.Version_NewEdit.textBox1$formGroup"
                                        $widgetId="p.AgentCommons.Version_NewEdit.textBox1$formGroup"
                                        class={"mx-name-textBox1 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.AgentCommons.Version_NewEdit.textBox1"
                                                $widgetId="p.AgentCommons.Version_NewEdit.textBox1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.AgentCommons.Version_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "AgentCommons.Version",
                                                    "attribute": "Title",
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
                                                maxLength={50}
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
                                                    "widgetId": "p.AgentCommons.Version_NewEdit.textBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Title" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.Version_NewEdit.textBox1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.Version_NewEdit.textBox1"
                                        })} />,
                                    <$FormGroup key="p.AgentCommons.Version_NewEdit.textArea1$formGroup"
                                        $widgetId="p.AgentCommons.Version_NewEdit.textArea1$formGroup"
                                        class={"mx-name-textArea1 mx-textarea"}
                                        style={undefined}
                                        control={[
                                            <$TextArea key="p.AgentCommons.Version_NewEdit.textArea1"
                                                $widgetId="p.AgentCommons.Version_NewEdit.textArea1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.AgentCommons.Version_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "AgentCommons.Version",
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
                                                maxLength={200}
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
                                                ariaLabel={undefined}
                                                ariaRequired={undefined}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.AgentCommons.Version_NewEdit.textArea1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.Version_NewEdit.textArea1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.Version_NewEdit.textArea1"
                                        })} />,
                                    <$DataView key="p.AgentCommons.Version_NewEdit.dataView3"
                                        $widgetId="p.AgentCommons.Version_NewEdit.dataView3"
                                        class={"mx-name-dataView3 form-vertical"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        object={AssociationObjectProperty({
                                            "dataSourceId": "p.22",
                                            "scope": "$Agent",
                                            "editable": true
                                        })}
                                        emptyMessage={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        body={[
                                            <$DataView key="p.AgentCommons.Version_NewEdit.dataView2"
                                                $widgetId="p.AgentCommons.Version_NewEdit.dataView2"
                                                class={"mx-name-dataView2 form-vertical"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                object={MicroflowObjectProperty({
                                                    "dataSourceId": "p.25",
                                                    "scope": "p.AgentCommons.Version_NewEdit.dataView3",
                                                    "editable": true,
                                                    "operationId": "Ux/H/lDKalmw7wd/wPLw/w",
                                                    "argMap": { "Agent": { "widget": "$Agent", "source": "object" } }
                                                })}
                                                emptyMessage={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                body={[
                                                    <$FormGroup key="p.AgentCommons.Version_NewEdit.comboBox3$formGroup"
                                                        $widgetId="p.AgentCommons.Version_NewEdit.comboBox3$formGroup"
                                                        class={"mx-name-comboBox3 combobox-selection"}
                                                        style={undefined}
                                                        control={[
                                                            <$Combobox key="p.AgentCommons.Version_NewEdit.comboBox3"
                                                                $widgetId="p.AgentCommons.Version_NewEdit.comboBox3"
                                                                source={"context"}
                                                                optionsSourceType={"association"}
                                                                optionsSourceDatabaseDataSource={undefined}
                                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                                optionsSourceDatabaseDefaultValue={undefined}
                                                                attributeAssociation={AssociationProperty({
                                                                    "type": "Reference",
                                                                    "entity": "AgentCommons.Version",
                                                                    "path": "",
                                                                    "attribute": "AgentCommons.Agent_Version_InUse",
                                                                    "endpointEntity": "AgentCommons.Version",
                                                                    "selectableObjectsId": "p.0",
                                                                    "scope": "$Agent",
                                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                                })}
                                                                optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                                    "dataSourceId": "p.0",
                                                                    "entity": "AgentCommons.Version",
                                                                    "scope": "$Agent",
                                                                    "operationId": "/vf2fAm2n1ap5KFoslZeMA",
                                                                    "sort": [
                                                                        [
                                                                            "VersionNumber",
                                                                            "asc"
                                                                        ]
                                                                    ],
                                                                    "arguments": {
                                                                        "Agent": [
                                                                            "$Agent"
                                                                        ],
                                                                        "CurrentObject": [
                                                                            "$Agent"
                                                                        ]
                                                                    },
                                                                    "constraints": { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "AgentCommons.Version_Agent", "context": "AgentCommons.Version", "attributeType": "ObjectReference" }, { "type": "variable", "name": "Agent" } ] }
                                                                })}
                                                                optionsSourceAssociationCaptionType={"expression"}
                                                                optionsSourceAssociationCaptionExpression={ListExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "v" }, { "type": "variable", "variable": "currentObject", "path": "VersionNumber" } ] }, { "type": "literal", "value": " " } ] }, { "type": "variable", "variable": "currentObject", "path": "Title" } ] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_NewEdit.comboBox3", "source": "object" } } },
                                                                    "dataSourceId": "p.0"
                                                                })}
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
                                                                        <$Container key="p.AgentCommons.Version_NewEdit.container31"
                                                                            $widgetId="p.AgentCommons.Version_NewEdit.container31"
                                                                            class={"mx-name-container31 item-selection row-left"}
                                                                            style={undefined}
                                                                            renderMode={"div"}
                                                                            onClick={undefined}
                                                                            content={[
                                                                                <$ConditionalVisibilityWrapper key="p.AgentCommons.Version_NewEdit.container2$visibility"
                                                                                    $widgetId="p.AgentCommons.Version_NewEdit.container2$visibility"
                                                                                    visible={ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject" }, { "type": "variable", "variable": "Version_Draft" } ] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_NewEdit.comboBox3", "source": "object" }, "Version_Draft": { "widget": "$Version_Draft", "source": "object" } } }
                                                                                    })}
                                                                                    contents={[
                                                                                        <$Container key="p.AgentCommons.Version_NewEdit.container2"
                                                                                            $widgetId="p.AgentCommons.Version_NewEdit.container2"
                                                                                            class={"mx-name-container2"}
                                                                                            style={undefined}
                                                                                            renderMode={"div"}
                                                                                            onClick={undefined}
                                                                                            content={[
                                                                                                <$Text key="p.AgentCommons.Version_NewEdit.text26"
                                                                                                    $widgetId="p.AgentCommons.Version_NewEdit.text26"
                                                                                                    class={"mx-name-text26 text-bold spacing-outer-right"}
                                                                                                    style={{
                                                                                                        "visibility": "hidden"
                                                                                                    }}
                                                                                                    caption={t([
                                                                                                        ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "v" }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "VersionNumber" }, { "type": "literal", "value": "{}" } ] } ] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_NewEdit.comboBox3", "source": "object" } } }
                                                                                                        })
                                                                                                    ])}
                                                                                                    renderMode={"span"} />,
                                                                                                <$Text key="p.AgentCommons.Version_NewEdit.text27"
                                                                                                    $widgetId="p.AgentCommons.Version_NewEdit.text27"
                                                                                                    class={"mx-name-text27"}
                                                                                                    style={undefined}
                                                                                                    caption={t([
                                                                                                        ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "variable", "variable": "dataView1", "path": "Title" }, "args": { "dataView1": { "widget": "p.AgentCommons.Version_NewEdit.dataView1", "source": "object" } } }
                                                                                                        })
                                                                                                    ])}
                                                                                                    renderMode={"span"} />
                                                                                            ]}
                                                                                            ariaHidden={false} />
                                                                                    ]} />,
                                                                                <$ConditionalVisibilityWrapper key="p.AgentCommons.Version_NewEdit.container7$visibility"
                                                                                    $widgetId="p.AgentCommons.Version_NewEdit.container7$visibility"
                                                                                    visible={ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject" }, { "type": "variable", "variable": "Version_Draft" } ] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_NewEdit.comboBox3", "source": "object" }, "Version_Draft": { "widget": "$Version_Draft", "source": "object" } } }
                                                                                    })}
                                                                                    contents={[
                                                                                        <$Container key="p.AgentCommons.Version_NewEdit.container7"
                                                                                            $widgetId="p.AgentCommons.Version_NewEdit.container7"
                                                                                            class={"mx-name-container7 badge-with-circle badge-with-circle--info"}
                                                                                            style={undefined}
                                                                                            renderMode={"div"}
                                                                                            onClick={undefined}
                                                                                            content={[
                                                                                                <$Container key="p.AgentCommons.Version_NewEdit.container8"
                                                                                                    $widgetId="p.AgentCommons.Version_NewEdit.container8"
                                                                                                    class={"mx-name-container8 circle"}
                                                                                                    style={undefined}
                                                                                                    renderMode={"div"}
                                                                                                    onClick={undefined}
                                                                                                    content={undefined}
                                                                                                    ariaHidden={false} />,
                                                                                                <$Text key="p.AgentCommons.Version_NewEdit.text4"
                                                                                                    $widgetId="p.AgentCommons.Version_NewEdit.text4"
                                                                                                    class={"mx-name-text4 badge-text text-small"}
                                                                                                    style={undefined}
                                                                                                    caption={t([
                                                                                                        ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "literal", "value": "New" }, "args": {} }
                                                                                                        })
                                                                                                    ])}
                                                                                                    renderMode={"span"} />
                                                                                            ]}
                                                                                            ariaHidden={false} />
                                                                                    ]} />,
                                                                                <$ConditionalVisibilityWrapper key="p.AgentCommons.Version_NewEdit.container1$visibility"
                                                                                    $widgetId="p.AgentCommons.Version_NewEdit.container1$visibility"
                                                                                    visible={ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject" }, { "type": "variable", "variable": "Version_Draft" } ] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_NewEdit.comboBox3", "source": "object" }, "Version_Draft": { "widget": "$Version_Draft", "source": "object" } } }
                                                                                    })}
                                                                                    contents={[
                                                                                        <$Container key="p.AgentCommons.Version_NewEdit.container1"
                                                                                            $widgetId="p.AgentCommons.Version_NewEdit.container1"
                                                                                            class={"mx-name-container1"}
                                                                                            style={undefined}
                                                                                            renderMode={"div"}
                                                                                            onClick={undefined}
                                                                                            content={[
                                                                                                <$Text key="p.AgentCommons.Version_NewEdit.text24"
                                                                                                    $widgetId="p.AgentCommons.Version_NewEdit.text24"
                                                                                                    class={"mx-name-text24 text-bold spacing-outer-right"}
                                                                                                    style={undefined}
                                                                                                    caption={t([
                                                                                                        ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "v" }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "VersionNumber" }, { "type": "literal", "value": "{}" } ] } ] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_NewEdit.comboBox3", "source": "object" } } }
                                                                                                        })
                                                                                                    ])}
                                                                                                    renderMode={"span"} />,
                                                                                                <$Text key="p.AgentCommons.Version_NewEdit.text25"
                                                                                                    $widgetId="p.AgentCommons.Version_NewEdit.text25"
                                                                                                    class={"mx-name-text25"}
                                                                                                    style={undefined}
                                                                                                    caption={t([
                                                                                                        ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_NewEdit.comboBox3", "source": "object" } } }
                                                                                                        })
                                                                                                    ])}
                                                                                                    renderMode={"span"} />
                                                                                            ]}
                                                                                            ariaHidden={false} />
                                                                                    ]} />,
                                                                                <$ConditionalVisibilityWrapper key="p.AgentCommons.Version_NewEdit.container5$visibility"
                                                                                    $widgetId="p.AgentCommons.Version_NewEdit.container5$visibility"
                                                                                    visible={ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject" }, { "type": "variable", "variable": "dataView2" } ] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_NewEdit.comboBox3", "source": "object" }, "dataView2": { "widget": "p.AgentCommons.Version_NewEdit.dataView2", "source": "object" } } }
                                                                                    })}
                                                                                    contents={[
                                                                                        <$Container key="p.AgentCommons.Version_NewEdit.container5"
                                                                                            $widgetId="p.AgentCommons.Version_NewEdit.container5"
                                                                                            class={"mx-name-container5 badge-with-circle badge-with-circle--success"}
                                                                                            style={undefined}
                                                                                            renderMode={"div"}
                                                                                            onClick={undefined}
                                                                                            content={[
                                                                                                <$Container key="p.AgentCommons.Version_NewEdit.container6"
                                                                                                    $widgetId="p.AgentCommons.Version_NewEdit.container6"
                                                                                                    class={"mx-name-container6 circle"}
                                                                                                    style={undefined}
                                                                                                    renderMode={"div"}
                                                                                                    onClick={undefined}
                                                                                                    content={undefined}
                                                                                                    ariaHidden={false} />,
                                                                                                <$Text key="p.AgentCommons.Version_NewEdit.text3"
                                                                                                    $widgetId="p.AgentCommons.Version_NewEdit.text3"
                                                                                                    class={"mx-name-text3 badge-text text-small"}
                                                                                                    style={undefined}
                                                                                                    caption={t([
                                                                                                        ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "literal", "value": "Currently in use" }, "args": {} }
                                                                                                        })
                                                                                                    ])}
                                                                                                    renderMode={"span"} />
                                                                                            ]}
                                                                                            ariaHidden={false} />
                                                                                    ]} />
                                                                            ]}
                                                                            ariaHidden={false} />
                                                                    ]
                                                                })}
                                                                optionsSourceDatabaseCustomContentType={"no"}
                                                                staticDataSourceCustomContentType={"no"}
                                                                showFooter={false}
                                                                menuFooterContent={undefined}
                                                                selectionMethod={"rowclick"}
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
                                                                    "widgetId": "p.AgentCommons.Version_NewEdit.comboBox3"
                                                                })} />
                                                        ]}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Check Agent Version In Use (change if necessary)" }, "args": {} }
                                                            })
                                                        ])}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.AgentCommons.Version_NewEdit.comboBox3"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.AgentCommons.Version_NewEdit.comboBox3"
                                                        })} />
                                                ]}
                                                hideFooter={false}
                                                footer={undefined} />
                                        ]}
                                        hideFooter={false}
                                        footer={undefined} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.Version_NewEdit.actionButton1$visibility"
                                        $widgetId="p.AgentCommons.Version_NewEdit.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.AgentCommons.Version_NewEdit.actionButton1"
                                                $widgetId="p.AgentCommons.Version_NewEdit.actionButton1"
                                                buttonId={"p.AgentCommons.Version_NewEdit.actionButton1"}
                                                class={"mx-name-actionButton1 pull-right spacing-outer-left"}
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
                                                    "action": { "type": "callMicroflow", "argMap": { "Version": { "widget": "$Version", "source": "object" }, "PageHelper": { "widget": "$PageHelper", "source": "object" }, "Version_Draft": { "widget": "$Version_Draft", "source": "object" }, "Agent": { "widget": "$Agent", "source": "object" } }, "config": { "operationId": "cyRJ5XvXFVmI4cv6dnOg1w", "progress": { "message": t([ "Saving.." ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ActionButton key="p.AgentCommons.Version_NewEdit.actionButton2"
                                        $widgetId="p.AgentCommons.Version_NewEdit.actionButton2"
                                        buttonId={"p.AgentCommons.Version_NewEdit.actionButton2"}
                                        class={"mx-name-actionButton2 pull-right"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "sMpBJXmn1ViJFxg/1RYBsQ", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit agent version"
]);

export const classes = "";

export const cancelChangesOperationId = "Ac59LTccplWJf6pqnIldXA";
export const closeButton = "p.AgentCommons.Version_NewEdit.actionButton2";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
