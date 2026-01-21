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
import { ListExpressionProperty } from "mendix/ListExpressionProperty";
import { MicroflowObjectListProperty } from "mendix/MicroflowObjectListProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { CheckBox } from "mendix/widgets/web/CheckBox";
import * as ComboboxWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Text } from "mendix/widgets/web/Text";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";
import { OCH_TraceFiltering_Agent } from "../nanoflows/ConversationalUI.OCH_TraceFiltering_Agent.js";

const { $DataView, $Div, $Container, $Text, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $Combobox, $CheckBox, $ActionButton } = asPluginWidgets({ DataView, Div, Container, Text, FormGroup, TextBox, ConditionalVisibilityWrapper, Combobox, CheckBox, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$DataView key="p.ConversationalUI.TraceFiltering_Edit.dataView6"
        $widgetId="p.ConversationalUI.TraceFiltering_Edit.dataView6"
        class={"mx-name-dataView6 form-vertical"}
        style={undefined}
        tabIndex={undefined}
        object={AssociationObjectProperty({
            "dataSourceId": "p.10",
            "scope": "$TraceFiltering",
            "editable": true
        })}
        emptyMessage={TextProperty({
            "value": t([
                ""
            ])
        })}
        body={[
            <$Div key="p.ConversationalUI.TraceFiltering_Edit.layoutGrid1"
                $widgetId="p.ConversationalUI.TraceFiltering_Edit.layoutGrid1"
                class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid spacing-inner-top-small spacing-inner-bottom-small"}
                style={undefined}
                content={[
                    <$Div key="p.ConversationalUI.TraceFiltering_Edit.layoutGrid1$row0"
                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.layoutGrid1$row0"
                        class={"row"}
                        style={undefined}
                        content={[
                            <$Div key="p.ConversationalUI.TraceFiltering_Edit.layoutGrid1$row0$column0"
                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.layoutGrid1$row0$column0"
                                class={"col-lg col-md col"}
                                style={undefined}
                                content={[
                                    <$Container key="p.ConversationalUI.TraceFiltering_Edit.container1"
                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.container1"
                                        class={"mx-name-container1"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Container key="p.ConversationalUI.TraceFiltering_Edit.container10"
                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.container10"
                                                class={"mx-name-container10 spacing-outer-bottom-small"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Text key="p.ConversationalUI.TraceFiltering_Edit.text1"
                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.text1"
                                                        class={"mx-name-text1 font-size-medium font-weight-semibold"}
                                                        style={undefined}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "General" }, "args": {} }
                                                            })
                                                        ])}
                                                        renderMode={"span"} />
                                                ]}
                                                ariaHidden={false} />,
                                            <$Container key="p.ConversationalUI.TraceFiltering_Edit.container3"
                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.container3"
                                                class={"mx-name-container3 col-left-aligned"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Text key="p.ConversationalUI.TraceFiltering_Edit.text3"
                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.text3"
                                                        class={"mx-name-text3 font-weight-semibold"}
                                                        style={undefined}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Trace ID" }, "args": {} }
                                                            })
                                                        ])}
                                                        renderMode={"span"} />,
                                                    <$Text key="p.ConversationalUI.TraceFiltering_Edit.text4"
                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.text4"
                                                        class={"mx-name-text4 spacing-outer-bottom-smaller font-weight-light"}
                                                        style={undefined}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Note: Conversation ID and Agent name are ignored when filtering by Trace ID." }, "args": {} }
                                                            })
                                                        ])}
                                                        renderMode={"span"} />
                                                ]}
                                                ariaHidden={false} />,
                                            <$FormGroup key="p.ConversationalUI.TraceFiltering_Edit.textBox2$formGroup"
                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox2$formGroup"
                                                class={"mx-name-textBox2 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p.ConversationalUI.TraceFiltering_Edit.textBox2"
                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox2"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                            "path": "",
                                                            "entity": "ConversationalUI.TraceFiltering",
                                                            "attribute": "TraceID",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false,
                                                            "validation": null,
                                                            "formatting": { }
                                                        })}
                                                        isPassword={false}
                                                        placeholder={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "e.g. 1ab12345b-a67b-8c9d" }, "args": {} }
                                                            })
                                                        ])}
                                                        mask={""}
                                                        readOnlyStyle={"control"}
                                                        maxLength={200}
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
                                                            "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox2"
                                                        })} />
                                                ]}
                                                caption={undefined}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox2"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox2"
                                                })} />,
                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.TraceFiltering_Edit.container18$visibility"
                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.container18$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "TraceFiltering", "path": "TraceID" } ] }, { "type": "literal", "value": "" } ] }, "args": { "TraceFiltering": { "widget": "$TraceFiltering", "source": "object" } } }
                                                })}
                                                contents={[
                                                    <$Container key="p.ConversationalUI.TraceFiltering_Edit.container18"
                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.container18"
                                                        class={"mx-name-container18"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Container key="p.ConversationalUI.TraceFiltering_Edit.container17"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.container17"
                                                                class={"mx-name-container17 col-left-aligned"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.ConversationalUI.TraceFiltering_Edit.text12"
                                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.text12"
                                                                        class={"mx-name-text12 font-weight-semibold"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Conversation ID" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        renderMode={"span"} />,
                                                                    <$Text key="p.ConversationalUI.TraceFiltering_Edit.text13"
                                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.text13"
                                                                        class={"mx-name-text13 spacing-outer-bottom-smaller font-weight-light"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Note: Agent is ignored when filtering by Conversation ID." }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        renderMode={"span"} />
                                                                ]}
                                                                ariaHidden={false} />,
                                                            <$FormGroup key="p.ConversationalUI.TraceFiltering_Edit.textBox3$formGroup"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox3$formGroup"
                                                                class={"mx-name-textBox3 mx-textbox"}
                                                                style={undefined}
                                                                control={[
                                                                    <$TextBox key="p.ConversationalUI.TraceFiltering_Edit.textBox3"
                                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox3"
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                                            "path": "",
                                                                            "entity": "ConversationalUI.TraceFiltering",
                                                                            "attribute": "ConversationID",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false,
                                                                            "validation": null,
                                                                            "formatting": { }
                                                                        })}
                                                                        isPassword={false}
                                                                        placeholder={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "e.g. b04c4-db9-213" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        mask={""}
                                                                        readOnlyStyle={"control"}
                                                                        maxLength={200}
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
                                                                            "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox3"
                                                                        })} />
                                                                ]}
                                                                caption={undefined}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox3"
                                                                })}
                                                                width={undefined}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox3"
                                                                })} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />,
                                            <$FormGroup key="p.ConversationalUI.TraceFiltering_Edit.comboBox3$formGroup"
                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.comboBox3$formGroup"
                                                class={"mx-name-comboBox3 combobox-model-selection"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p.ConversationalUI.TraceFiltering_Edit.comboBox3"
                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.comboBox3"
                                                        source={"context"}
                                                        optionsSourceType={"association"}
                                                        optionsSourceDatabaseDataSource={undefined}
                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                        optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "AgentCommons.Agent",
                                                            "attribute": "Title",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.0",
                                                            "isList": false
                                                        })}
                                                        optionsSourceAssociationCaptionExpression={undefined}
                                                        optionsSourceDatabaseDefaultValue={undefined}
                                                        attributeAssociation={AssociationProperty({
                                                            "type": "ReferenceSet",
                                                            "entity": "ConversationalUI.TraceFiltering",
                                                            "path": "",
                                                            "attribute": "ConversationalUI.TraceFiltering_Agent",
                                                            "endpointEntity": "AgentCommons.Agent",
                                                            "selectableObjectsId": "p.0",
                                                            "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isEditable": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "TraceFiltering", "path": "TraceID" } ] }, { "type": "literal", "value": "" } ] }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "TraceFiltering", "path": "ConversationID" } ] }, { "type": "literal", "value": "" } ] }, "else": { "type": "literal", "value": false } }, "args": { "TraceFiltering": { "widget": "$TraceFiltering", "source": "object" } } }
                                                        })}
                                                        optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                            "dataSourceId": "p.0",
                                                            "entity": "AgentCommons.Agent",
                                                            "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                            "operationId": "7u2Nk9HfL1WiI3N2fDVINw",
                                                            "sort": []
                                                        })}
                                                        optionsSourceStaticDataSource={[]}
                                                        emptyOptionText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Select agent" }, "args": {} }
                                                            })
                                                        ])}
                                                        filterType={"none"}
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
                                                        selectAllButton={true}
                                                        selectAllButtonCaption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                            })
                                                        ])}
                                                        readOnlyStyle={"bordered"}
                                                        onChangeEvent={ActionProperty({
                                                            "action": { "type": "callNanoflow", "argMap": { "TraceFiltering": { "widget": "$TraceFiltering", "source": "object" } }, "config": { "nanoflow": () => OCH_TraceFiltering_Agent, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                            "argumentTypes": { }
                                                        })}
                                                        onEnterEvent={undefined}
                                                        onLeaveEvent={ActionProperty({
                                                            "action": { "type": "synchronize", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "argumentTypes": { }
                                                        })}
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
                                                        lazyLoading={false}
                                                        loadingType={"spinner"}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p.ConversationalUI.TraceFiltering_Edit.comboBox3"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Agent name" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.ConversationalUI.TraceFiltering_Edit.comboBox3"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.comboBox3"
                                                })} />,
                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.TraceFiltering_Edit.comboBox2$formGroup$visibility"
                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.comboBox2$formGroup$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ConversationalUI.TraceFiltering_Agent" }, { "type": "literal", "value": null } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.TraceFiltering_Edit.dataView6", "source": "object" } } }
                                                })}
                                                contents={[
                                                    <$FormGroup key="p.ConversationalUI.TraceFiltering_Edit.comboBox2$formGroup"
                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.comboBox2$formGroup"
                                                        class={"mx-name-comboBox2 combobox-model-selection"}
                                                        style={undefined}
                                                        control={[
                                                            <$Combobox key="p.ConversationalUI.TraceFiltering_Edit.comboBox2"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.comboBox2"
                                                                source={"context"}
                                                                optionsSourceType={"association"}
                                                                optionsSourceDatabaseDataSource={undefined}
                                                                optionsSourceAssociationCaptionType={"expression"}
                                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                                optionsSourceAssociationCaptionExpression={ListExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "AgentCommons.Version_Agent/AgentCommons.Agent/Title" }, { "type": "literal", "value": " - " } ] }, { "type": "variable", "variable": "currentObject", "path": "Title" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.TraceFiltering_Edit.comboBox2", "source": "object" } } },
                                                                    "dataSourceId": "p.1"
                                                                })}
                                                                optionsSourceDatabaseDefaultValue={undefined}
                                                                attributeAssociation={AssociationProperty({
                                                                    "type": "ReferenceSet",
                                                                    "entity": "ConversationalUI.TraceFiltering",
                                                                    "path": "",
                                                                    "attribute": "ConversationalUI.TraceFiltering_Version",
                                                                    "endpointEntity": "AgentCommons.Version",
                                                                    "selectableObjectsId": "p.1",
                                                                    "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                                })}
                                                                optionsSourceAssociationDataSource={MicroflowObjectListProperty({
                                                                    "argMap": { "TraceFiltering": { "widget": "$TraceFiltering", "source": "object" } },
                                                                    "dataSourceId": "p.1",
                                                                    "entity": "AgentCommons.Version",
                                                                    "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                                    "operationId": "tulgOawHQ1Wz2WFGN6dXyw"
                                                                })}
                                                                optionsSourceStaticDataSource={[]}
                                                                emptyOptionText={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Select Version(s)" }, "args": {} }
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
                                                                selectAllButton={true}
                                                                selectAllButtonCaption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                                    })
                                                                ])}
                                                                readOnlyStyle={"bordered"}
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
                                                                    "widgetId": "p.ConversationalUI.TraceFiltering_Edit.comboBox2"
                                                                })} />
                                                        ]}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Agent version(s)" }, "args": {} }
                                                            })
                                                        ])}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.ConversationalUI.TraceFiltering_Edit.comboBox2"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.comboBox2"
                                                        })} />
                                                ]} />,
                                            <$Container key="p.ConversationalUI.TraceFiltering_Edit.container4"
                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.container4"
                                                class={"mx-name-container4"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Container key="p.ConversationalUI.TraceFiltering_Edit.container11"
                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.container11"
                                                        class={"mx-name-container11 spacing-outer-bottom-small"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Text key="p.ConversationalUI.TraceFiltering_Edit.text6"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.text6"
                                                                class={"mx-name-text6 font-size-medium font-weight-semibold"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Duration" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />
                                                        ]}
                                                        ariaHidden={false} />,
                                                    <$Container key="p.ConversationalUI.TraceFiltering_Edit.container5"
                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.container5"
                                                        class={"mx-name-container5 row-left-aligned"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$FormGroup key="p.ConversationalUI.TraceFiltering_Edit.textBox1$formGroup"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox1$formGroup"
                                                                class={"mx-name-textBox1 mx-textbox"}
                                                                style={undefined}
                                                                control={[
                                                                    <$TextBox key="p.ConversationalUI.TraceFiltering_Edit.textBox1"
                                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox1"
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                                            "path": "",
                                                                            "entity": "ConversationalUI.TraceFiltering",
                                                                            "attribute": "MinDuration",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false,
                                                                            "validation": null,
                                                                            "formatting": {
                                                                                "numberFormat": {
                                                                                    "groupDigits": false,
                                                                                    "decimalPrecision": 1
                                                                                }
                                                                            }
                                                                        })}
                                                                        isPassword={false}
                                                                        placeholder={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "1.0" }, "args": {} }
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
                                                                            "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox1"
                                                                        })} />
                                                                ]}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Min. duration in seconds" }, "args": {} }
                                                                    })
                                                                ])}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox1"
                                                                })}
                                                                width={undefined}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox1"
                                                                })} />,
                                                            <$Text key="p.ConversationalUI.TraceFiltering_Edit.text7"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.text7"
                                                                class={"mx-name-text7 spacing-outer-left-large spacing-outer-right-large"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "-" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />,
                                                            <$FormGroup key="p.ConversationalUI.TraceFiltering_Edit.textBox4$formGroup"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox4$formGroup"
                                                                class={"mx-name-textBox4 mx-textbox"}
                                                                style={undefined}
                                                                control={[
                                                                    <$TextBox key="p.ConversationalUI.TraceFiltering_Edit.textBox4"
                                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox4"
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                                            "path": "",
                                                                            "entity": "ConversationalUI.TraceFiltering",
                                                                            "attribute": "MaxDuration",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false,
                                                                            "validation": null,
                                                                            "formatting": {
                                                                                "numberFormat": {
                                                                                    "groupDigits": false,
                                                                                    "decimalPrecision": 1
                                                                                }
                                                                            }
                                                                        })}
                                                                        isPassword={false}
                                                                        placeholder={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "10000" }, "args": {} }
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
                                                                            "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox4"
                                                                        })} />
                                                                ]}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Max. duration in seconds" }, "args": {} }
                                                                    })
                                                                ])}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox4"
                                                                })}
                                                                width={undefined}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox4"
                                                                })} />
                                                        ]}
                                                        ariaHidden={false} />,
                                                    <$Container key="p.ConversationalUI.TraceFiltering_Edit.container12"
                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.container12"
                                                        class={"mx-name-container12 spacing-outer-bottom-small"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Text key="p.ConversationalUI.TraceFiltering_Edit.text5"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.text5"
                                                                class={"mx-name-text5 font-size-medium font-weight-semibold"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "LLM & Tokens" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />
                                                        ]}
                                                        ariaHidden={false} />,
                                                    <$Container key="p.ConversationalUI.TraceFiltering_Edit.container6"
                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.container6"
                                                        class={"mx-name-container6 row-left-aligned"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$FormGroup key="p.ConversationalUI.TraceFiltering_Edit.textBox5$formGroup"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox5$formGroup"
                                                                class={"mx-name-textBox5 mx-textbox"}
                                                                style={undefined}
                                                                control={[
                                                                    <$TextBox key="p.ConversationalUI.TraceFiltering_Edit.textBox5"
                                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox5"
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                                            "path": "",
                                                                            "entity": "ConversationalUI.TraceFiltering",
                                                                            "attribute": "MinTotalTokens",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false,
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
                                                                                "expression": { "expr": { "type": "literal", "value": "100" }, "args": {} }
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
                                                                            "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox5"
                                                                        })} />
                                                                ]}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Min. total tokens" }, "args": {} }
                                                                    })
                                                                ])}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox5"
                                                                })}
                                                                width={undefined}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox5"
                                                                })} />,
                                                            <$Text key="p.ConversationalUI.TraceFiltering_Edit.text8"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.text8"
                                                                class={"mx-name-text8 spacing-outer-left-large spacing-outer-right-large"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "-" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />,
                                                            <$FormGroup key="p.ConversationalUI.TraceFiltering_Edit.textBox6$formGroup"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox6$formGroup"
                                                                class={"mx-name-textBox6 mx-textbox"}
                                                                style={undefined}
                                                                control={[
                                                                    <$TextBox key="p.ConversationalUI.TraceFiltering_Edit.textBox6"
                                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox6"
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                                            "path": "",
                                                                            "entity": "ConversationalUI.TraceFiltering",
                                                                            "attribute": "MaxTotalTokens",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false,
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
                                                                                "expression": { "expr": { "type": "literal", "value": "10000" }, "args": {} }
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
                                                                            "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox6"
                                                                        })} />
                                                                ]}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Max. total tokens" }, "args": {} }
                                                                    })
                                                                ])}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox6"
                                                                })}
                                                                width={undefined}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox6"
                                                                })} />
                                                        ]}
                                                        ariaHidden={false} />,
                                                    <$Container key="p.ConversationalUI.TraceFiltering_Edit.container7"
                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.container7"
                                                        class={"mx-name-container7 row-left-aligned"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$FormGroup key="p.ConversationalUI.TraceFiltering_Edit.textBox7$formGroup"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox7$formGroup"
                                                                class={"mx-name-textBox7 mx-textbox"}
                                                                style={undefined}
                                                                control={[
                                                                    <$TextBox key="p.ConversationalUI.TraceFiltering_Edit.textBox7"
                                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox7"
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                                            "path": "",
                                                                            "entity": "ConversationalUI.TraceFiltering",
                                                                            "attribute": "MinInputTokens",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false,
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
                                                                                "expression": { "expr": { "type": "literal", "value": "100" }, "args": {} }
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
                                                                            "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox7"
                                                                        })} />
                                                                ]}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Min. input tokens" }, "args": {} }
                                                                    })
                                                                ])}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox7"
                                                                })}
                                                                width={undefined}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox7"
                                                                })} />,
                                                            <$Text key="p.ConversationalUI.TraceFiltering_Edit.text9"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.text9"
                                                                class={"mx-name-text9 spacing-outer-left-large spacing-outer-right-large"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "-" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />,
                                                            <$FormGroup key="p.ConversationalUI.TraceFiltering_Edit.textBox8$formGroup"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox8$formGroup"
                                                                class={"mx-name-textBox8 mx-textbox"}
                                                                style={undefined}
                                                                control={[
                                                                    <$TextBox key="p.ConversationalUI.TraceFiltering_Edit.textBox8"
                                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox8"
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                                            "path": "",
                                                                            "entity": "ConversationalUI.TraceFiltering",
                                                                            "attribute": "MaxInputTokens",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false,
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
                                                                                "expression": { "expr": { "type": "literal", "value": "10000" }, "args": {} }
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
                                                                            "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox8"
                                                                        })} />
                                                                ]}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Max. input tokens" }, "args": {} }
                                                                    })
                                                                ])}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox8"
                                                                })}
                                                                width={undefined}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox8"
                                                                })} />
                                                        ]}
                                                        ariaHidden={false} />,
                                                    <$Container key="p.ConversationalUI.TraceFiltering_Edit.container16"
                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.container16"
                                                        class={"mx-name-container16 row-left-aligned"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$FormGroup key="p.ConversationalUI.TraceFiltering_Edit.textBox9$formGroup"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox9$formGroup"
                                                                class={"mx-name-textBox9 mx-textbox"}
                                                                style={undefined}
                                                                control={[
                                                                    <$TextBox key="p.ConversationalUI.TraceFiltering_Edit.textBox9"
                                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox9"
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                                            "path": "",
                                                                            "entity": "ConversationalUI.TraceFiltering",
                                                                            "attribute": "MinOutputTokens",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false,
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
                                                                                "expression": { "expr": { "type": "literal", "value": "100" }, "args": {} }
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
                                                                            "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox9"
                                                                        })} />
                                                                ]}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Min. output tokens" }, "args": {} }
                                                                    })
                                                                ])}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox9"
                                                                })}
                                                                width={undefined}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox9"
                                                                })} />,
                                                            <$Text key="p.ConversationalUI.TraceFiltering_Edit.text10"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.text10"
                                                                class={"mx-name-text10 spacing-outer-left-large spacing-outer-right-large"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "-" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />,
                                                            <$FormGroup key="p.ConversationalUI.TraceFiltering_Edit.textBox10$formGroup"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox10$formGroup"
                                                                class={"mx-name-textBox10 mx-textbox"}
                                                                style={undefined}
                                                                control={[
                                                                    <$TextBox key="p.ConversationalUI.TraceFiltering_Edit.textBox10"
                                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.textBox10"
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                                            "path": "",
                                                                            "entity": "ConversationalUI.TraceFiltering",
                                                                            "attribute": "MaxOutputTokens",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false,
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
                                                                                "expression": { "expr": { "type": "literal", "value": "10000" }, "args": {} }
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
                                                                            "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox10"
                                                                        })} />
                                                                ]}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Max. output tokens" }, "args": {} }
                                                                    })
                                                                ])}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox10"
                                                                })}
                                                                width={undefined}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox10"
                                                                })} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]}
                                                ariaHidden={false} />,
                                            <$Container key="p.ConversationalUI.TraceFiltering_Edit.container14"
                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.container14"
                                                class={"mx-name-container14"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Container key="p.ConversationalUI.TraceFiltering_Edit.container13"
                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.container13"
                                                        class={"mx-name-container13 spacing-outer-bottom-small"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Text key="p.ConversationalUI.TraceFiltering_Edit.text11"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.text11"
                                                                class={"mx-name-text11 font-size-medium font-weight-semibold"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Error" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />
                                                        ]}
                                                        ariaHidden={false} />,
                                                    <$Container key="p.ConversationalUI.TraceFiltering_Edit.container15"
                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.container15"
                                                        class={"mx-name-container15 row-text-img"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$FormGroup key="p.ConversationalUI.TraceFiltering_Edit.checkBox1$formGroup"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.checkBox1$formGroup"
                                                                class={"mx-name-checkBox1 spacing-outer-bottom-none spacing-outer-right-small mx-checkbox label-after"}
                                                                style={undefined}
                                                                control={[
                                                                    <$CheckBox key="p.ConversationalUI.TraceFiltering_Edit.checkBox1"
                                                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.checkBox1"
                                                                        value={AttributeProperty({
                                                                            "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                                            "path": "",
                                                                            "entity": "ConversationalUI.TraceFiltering",
                                                                            "attribute": "ShowOnlyError",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false,
                                                                            "validation": null
                                                                        })}
                                                                        readOnlyStyle={"control"}
                                                                        onEnter={undefined}
                                                                        onLeave={undefined}
                                                                        caption={undefined}
                                                                        ariaLabel={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        tabIndex={undefined}
                                                                        id={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.ConversationalUI.TraceFiltering_Edit.checkBox1"
                                                                        })} />
                                                                ]}
                                                                caption={undefined}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.ConversationalUI.TraceFiltering_Edit.checkBox1"
                                                                })}
                                                                width={undefined}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.checkBox1"
                                                                })} />,
                                                            <$Text key="p.ConversationalUI.TraceFiltering_Edit.text2"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.text2"
                                                                class={"mx-name-text2"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Display only the traces that contain errors" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />
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
            <$Container key="p.ConversationalUI.TraceFiltering_Edit.container73"
                $widgetId="p.ConversationalUI.TraceFiltering_Edit.container73"
                class={"mx-name-container73 pop-up-footer-flex-container"}
                style={undefined}
                renderMode={"div"}
                onClick={undefined}
                content={[
                    <$Container key="p.ConversationalUI.TraceFiltering_Edit.container2"
                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.container2"
                        class={"mx-name-container2 pop-up-flex-items"}
                        style={undefined}
                        renderMode={"div"}
                        onClick={undefined}
                        content={[
                            <$Container key="p.ConversationalUI.TraceFiltering_Edit.container8"
                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.container8"
                                class={"mx-name-container8 row-left-aligned"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.TraceFiltering_Edit.actionButton3$visibility"
                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.actionButton3$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.ConversationalUI.TraceFiltering_Edit.actionButton3"
                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.actionButton3"
                                                buttonId={"p.ConversationalUI.TraceFiltering_Edit.actionButton3"}
                                                class={"mx-name-actionButton3 btn-text-danger"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-default"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Reset" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                icon={undefined}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": { "TraceFiltering": { "widget": "$TraceFiltering", "source": "object" } }, "config": { "operationId": "Tc0tOKGYs165TJHYdOo60A", "progress": { "message": t([ "Updating graph.." ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />
                                ]}
                                ariaHidden={false} />,
                            <$Container key="p.ConversationalUI.TraceFiltering_Edit.container9"
                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.container9"
                                class={"mx-name-container9 row-right-aligned"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$ActionButton key="p.ConversationalUI.TraceFiltering_Edit.actionButton2"
                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.actionButton2"
                                        buttonId={"p.ConversationalUI.TraceFiltering_Edit.actionButton2"}
                                        class={"mx-name-actionButton2 spacing-outer-right-small"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "bjvWR+CRPFS7fD2oriFScw", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />,
                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.TraceFiltering_Edit.actionButton1$visibility"
                                        $widgetId="p.ConversationalUI.TraceFiltering_Edit.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.ConversationalUI.TraceFiltering_Edit.actionButton1"
                                                $widgetId="p.ConversationalUI.TraceFiltering_Edit.actionButton1"
                                                buttonId={"p.ConversationalUI.TraceFiltering_Edit.actionButton1"}
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
                                                    "action": { "type": "callMicroflow", "argMap": { "TraceFiltering": { "widget": "$TraceFiltering", "source": "object" } }, "config": { "operationId": "hqiwQ9HZGF6USKObg0Kvew", "progress": { "message": t([ "Filtering..." ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
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
    "Filters"
]);

export const classes = "";

export const cancelChangesOperationId = "3tkHLPY/6lmunhS9nBkoUQ";
export const closeButton = "p.ConversationalUI.TraceFiltering_Edit.actionButton2";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
