import { reactExports, asPluginWidgets, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-iFOPmzlY.js';
import { AssociationProperty } from '../AssociationProperty-vuO-mMD-.js';
import '../AttributeProperty-DPm6A02S.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-BEIxbT2n.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-DirRMZIL.js';
import { ListExpressionProperty } from '../ListExpressionProperty-Cd_aouEd.js';
import { MicroflowObjectProperty } from '../MicroflowObjectProperty-D79UAin-.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-CgBaKmKA.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { FormGroup, ValidationProperty } from '../FormGroup-bFu0BNb6.js';
import { ComboboxWidgetModule } from '../Combobox-BIE6CPmt.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BilSZaU4.js';
import { Container } from '../Container-PSi6m2QL.js';
import { DataView } from '../DataView-RrZIPNzV.js';
import { Div } from '../Div-DnhZCXw4.js';
import { Text } from '../Text-Ct6rfb-k.js';
import { TextArea } from '../TextArea-CLTGOhN2.js';
import { TextBox } from '../TextBox-CWp8bmf4.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-B5WEKHCX.js';
import { AttributeProperty } from '../CTQxk13g-CU8g3epp.js';
import '../CkBXggmw-D1iecObi.js';
import '../UeptbR6O-Dse5KB9T.js';
import '../uEIG9e6s-VBk3qU43.js';
import '../CxoxYXlg-BJ3P5g_E.js';
import '../CTcC6PjV-eX91G0mv.js';
import '../BMuJrVqQ-CWJgr9IB.js';
import '../bdxqAC6d-BooPaEdW.js';
import '../InlineText-f914ePRH.js';
import '../B6nacfjo-DRlmgVxc.js';
import '../B7_8A3ct-PtP2BrDi.js';
import '../F-L0MxFU-CBWLJP8y.js';
import '../ScrollContainer-DO1bE89X.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $Div, $DataView, $FormGroup, $TextBox, $TextArea, $Combobox, $Container, $ConditionalVisibilityWrapper, $Text, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, TextArea, Combobox, Container, ConditionalVisibilityWrapper, Text, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.AgentCommons.Version_NewEdit.layoutGrid1",
      $widgetId: "p.AgentCommons.Version_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AgentCommons.Version_NewEdit.layoutGrid1$row0",
            $widgetId: "p.AgentCommons.Version_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AgentCommons.Version_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.AgentCommons.Version_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.AgentCommons.Version_NewEdit.dataView1",
                        $widgetId: "p.AgentCommons.Version_NewEdit.dataView1",
                        class: "mx-name-dataView1 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.13",
                          "scope": "$Version",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.AgentCommons.Version_NewEdit.textBox1$formGroup",
                              $widgetId: "p.AgentCommons.Version_NewEdit.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.AgentCommons.Version_NewEdit.textBox1",
                                    $widgetId: "p.AgentCommons.Version_NewEdit.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.AgentCommons.Version_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "AgentCommons.Version",
                                      "attribute": "Title",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "control",
                                    maxLength: 50,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    onEnterKeyPress: void 0,
                                    ariaLabel: void 0,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.AgentCommons.Version_NewEdit.textBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Title" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AgentCommons.Version_NewEdit.textBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AgentCommons.Version_NewEdit.textBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.AgentCommons.Version_NewEdit.textArea1$formGroup",
                              $widgetId: "p.AgentCommons.Version_NewEdit.textArea1$formGroup",
                              class: "mx-name-textArea1 mx-textarea",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextArea,
                                  {
                                    key: "p.AgentCommons.Version_NewEdit.textArea1",
                                    $widgetId: "p.AgentCommons.Version_NewEdit.textArea1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.AgentCommons.Version_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "AgentCommons.Version",
                                      "attribute": "Description",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null
                                    }),
                                    counterMessage: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    maxLength: 200,
                                    numberOfLines: 5,
                                    autoGrow: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    readOnlyStyle: "control",
                                    textTooLongMessage: TextProperty({
                                      "value": selectTranslation([
                                        "Value too long."
                                      ])
                                    }),
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    ariaLabel: void 0,
                                    ariaRequired: void 0,
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.AgentCommons.Version_NewEdit.textArea1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AgentCommons.Version_NewEdit.textArea1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AgentCommons.Version_NewEdit.textArea1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $DataView,
                            {
                              key: "p.AgentCommons.Version_NewEdit.dataView3",
                              $widgetId: "p.AgentCommons.Version_NewEdit.dataView3",
                              class: "mx-name-dataView3 form-vertical",
                              style: void 0,
                              tabIndex: void 0,
                              object: AssociationObjectProperty({
                                "dataSourceId": "p.22",
                                "scope": "$Agent",
                                "editable": true
                              }),
                              emptyMessage: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              body: [
                                /* @__PURE__ */ React.createElement(
                                  $DataView,
                                  {
                                    key: "p.AgentCommons.Version_NewEdit.dataView2",
                                    $widgetId: "p.AgentCommons.Version_NewEdit.dataView2",
                                    class: "mx-name-dataView2 form-vertical",
                                    style: void 0,
                                    tabIndex: void 0,
                                    object: MicroflowObjectProperty({
                                      "dataSourceId": "p.25",
                                      "scope": "p.AgentCommons.Version_NewEdit.dataView3",
                                      "editable": true,
                                      "operationId": "Ux/H/lDKalmw7wd/wPLw/w",
                                      "argMap": { "Agent": { "widget": "$Agent", "source": "object" } }
                                    }),
                                    emptyMessage: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    body: [
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.AgentCommons.Version_NewEdit.comboBox3$formGroup",
                                          $widgetId: "p.AgentCommons.Version_NewEdit.comboBox3$formGroup",
                                          class: "mx-name-comboBox3 combobox-selection",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $Combobox,
                                              {
                                                key: "p.AgentCommons.Version_NewEdit.comboBox3",
                                                $widgetId: "p.AgentCommons.Version_NewEdit.comboBox3",
                                                source: "context",
                                                optionsSourceType: "association",
                                                optionsSourceDatabaseDataSource: void 0,
                                                optionsSourceDatabaseCaptionType: "attribute",
                                                optionsSourceDatabaseDefaultValue: void 0,
                                                attributeAssociation: AssociationProperty({
                                                  "type": "Reference",
                                                  "entity": "AgentCommons.Version",
                                                  "path": "",
                                                  "attribute": "AgentCommons.Agent_Version_InUse",
                                                  "endpointEntity": "AgentCommons.Version",
                                                  "selectableObjectsId": "p.0",
                                                  "scope": "$Agent",
                                                  "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                }),
                                                optionsSourceAssociationDataSource: DatabaseObjectListProperty({
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
                                                  "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "AgentCommons.Version_Agent", "context": "AgentCommons.Version", "attributeType": "ObjectReference" }, { "type": "variable", "name": "Agent" }] }
                                                }),
                                                optionsSourceAssociationCaptionType: "expression",
                                                optionsSourceAssociationCaptionExpression: ListExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "v" }, { "type": "variable", "variable": "currentObject", "path": "VersionNumber" }] }, { "type": "literal", "value": " " }] }, { "type": "variable", "variable": "currentObject", "path": "Title" }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_NewEdit.comboBox3", "source": "object" } } },
                                                  "dataSourceId": "p.0"
                                                }),
                                                optionsSourceStaticDataSource: [],
                                                emptyOptionText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                filterType: "none",
                                                noOptionsText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                clearable: true,
                                                optionsSourceAssociationCustomContentType: "yes",
                                                optionsSourceAssociationCustomContent: TemplatedWidgetProperty({
                                                  "dataSourceId": "p.0",
                                                  "editable": false,
                                                  "children": () => [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Container,
                                                      {
                                                        key: "p.AgentCommons.Version_NewEdit.container31",
                                                        $widgetId: "p.AgentCommons.Version_NewEdit.container31",
                                                        class: "mx-name-container31 item-selection row-left",
                                                        style: void 0,
                                                        renderMode: "div",
                                                        onClick: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $ConditionalVisibilityWrapper,
                                                            {
                                                              key: "p.AgentCommons.Version_NewEdit.container2$visibility",
                                                              $widgetId: "p.AgentCommons.Version_NewEdit.container2$visibility",
                                                              visible: ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject" }, { "type": "variable", "variable": "Version_Draft" }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_NewEdit.comboBox3", "source": "object" }, "Version_Draft": { "widget": "$Version_Draft", "source": "object" } } }
                                                              }),
                                                              contents: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Container,
                                                                  {
                                                                    key: "p.AgentCommons.Version_NewEdit.container2",
                                                                    $widgetId: "p.AgentCommons.Version_NewEdit.container2",
                                                                    class: "mx-name-container2",
                                                                    style: void 0,
                                                                    renderMode: "div",
                                                                    onClick: void 0,
                                                                    content: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Text,
                                                                        {
                                                                          key: "p.AgentCommons.Version_NewEdit.text26",
                                                                          $widgetId: "p.AgentCommons.Version_NewEdit.text26",
                                                                          class: "mx-name-text26 text-bold spacing-outer-right",
                                                                          style: {
                                                                            "visibility": "hidden"
                                                                          },
                                                                          caption: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "v" }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "VersionNumber" }, { "type": "literal", "value": "{}" }] }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_NewEdit.comboBox3", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          renderMode: "span"
                                                                        }
                                                                      ),
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Text,
                                                                        {
                                                                          key: "p.AgentCommons.Version_NewEdit.text27",
                                                                          $widgetId: "p.AgentCommons.Version_NewEdit.text27",
                                                                          class: "mx-name-text27",
                                                                          style: void 0,
                                                                          caption: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "dataView1", "path": "Title" }, "args": { "dataView1": { "widget": "p.AgentCommons.Version_NewEdit.dataView1", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          renderMode: "span"
                                                                        }
                                                                      )
                                                                    ],
                                                                    ariaHidden: false
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $ConditionalVisibilityWrapper,
                                                            {
                                                              key: "p.AgentCommons.Version_NewEdit.container7$visibility",
                                                              $widgetId: "p.AgentCommons.Version_NewEdit.container7$visibility",
                                                              visible: ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject" }, { "type": "variable", "variable": "Version_Draft" }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_NewEdit.comboBox3", "source": "object" }, "Version_Draft": { "widget": "$Version_Draft", "source": "object" } } }
                                                              }),
                                                              contents: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Container,
                                                                  {
                                                                    key: "p.AgentCommons.Version_NewEdit.container7",
                                                                    $widgetId: "p.AgentCommons.Version_NewEdit.container7",
                                                                    class: "mx-name-container7 badge-with-circle badge-with-circle--info",
                                                                    style: void 0,
                                                                    renderMode: "div",
                                                                    onClick: void 0,
                                                                    content: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Container,
                                                                        {
                                                                          key: "p.AgentCommons.Version_NewEdit.container8",
                                                                          $widgetId: "p.AgentCommons.Version_NewEdit.container8",
                                                                          class: "mx-name-container8 circle",
                                                                          style: void 0,
                                                                          renderMode: "div",
                                                                          onClick: void 0,
                                                                          content: void 0,
                                                                          ariaHidden: false
                                                                        }
                                                                      ),
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Text,
                                                                        {
                                                                          key: "p.AgentCommons.Version_NewEdit.text4",
                                                                          $widgetId: "p.AgentCommons.Version_NewEdit.text4",
                                                                          class: "mx-name-text4 badge-text text-small",
                                                                          style: void 0,
                                                                          caption: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "literal", "value": "New" }, "args": {} }
                                                                            })
                                                                          ]),
                                                                          renderMode: "span"
                                                                        }
                                                                      )
                                                                    ],
                                                                    ariaHidden: false
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $ConditionalVisibilityWrapper,
                                                            {
                                                              key: "p.AgentCommons.Version_NewEdit.container1$visibility",
                                                              $widgetId: "p.AgentCommons.Version_NewEdit.container1$visibility",
                                                              visible: ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject" }, { "type": "variable", "variable": "Version_Draft" }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_NewEdit.comboBox3", "source": "object" }, "Version_Draft": { "widget": "$Version_Draft", "source": "object" } } }
                                                              }),
                                                              contents: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Container,
                                                                  {
                                                                    key: "p.AgentCommons.Version_NewEdit.container1",
                                                                    $widgetId: "p.AgentCommons.Version_NewEdit.container1",
                                                                    class: "mx-name-container1",
                                                                    style: void 0,
                                                                    renderMode: "div",
                                                                    onClick: void 0,
                                                                    content: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Text,
                                                                        {
                                                                          key: "p.AgentCommons.Version_NewEdit.text24",
                                                                          $widgetId: "p.AgentCommons.Version_NewEdit.text24",
                                                                          class: "mx-name-text24 text-bold spacing-outer-right",
                                                                          style: void 0,
                                                                          caption: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "v" }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "VersionNumber" }, { "type": "literal", "value": "{}" }] }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_NewEdit.comboBox3", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          renderMode: "span"
                                                                        }
                                                                      ),
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Text,
                                                                        {
                                                                          key: "p.AgentCommons.Version_NewEdit.text25",
                                                                          $widgetId: "p.AgentCommons.Version_NewEdit.text25",
                                                                          class: "mx-name-text25",
                                                                          style: void 0,
                                                                          caption: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_NewEdit.comboBox3", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          renderMode: "span"
                                                                        }
                                                                      )
                                                                    ],
                                                                    ariaHidden: false
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $ConditionalVisibilityWrapper,
                                                            {
                                                              key: "p.AgentCommons.Version_NewEdit.container5$visibility",
                                                              $widgetId: "p.AgentCommons.Version_NewEdit.container5$visibility",
                                                              visible: ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject" }, { "type": "variable", "variable": "dataView2" }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_NewEdit.comboBox3", "source": "object" }, "dataView2": { "widget": "p.AgentCommons.Version_NewEdit.dataView2", "source": "object" } } }
                                                              }),
                                                              contents: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Container,
                                                                  {
                                                                    key: "p.AgentCommons.Version_NewEdit.container5",
                                                                    $widgetId: "p.AgentCommons.Version_NewEdit.container5",
                                                                    class: "mx-name-container5 badge-with-circle badge-with-circle--success",
                                                                    style: void 0,
                                                                    renderMode: "div",
                                                                    onClick: void 0,
                                                                    content: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Container,
                                                                        {
                                                                          key: "p.AgentCommons.Version_NewEdit.container6",
                                                                          $widgetId: "p.AgentCommons.Version_NewEdit.container6",
                                                                          class: "mx-name-container6 circle",
                                                                          style: void 0,
                                                                          renderMode: "div",
                                                                          onClick: void 0,
                                                                          content: void 0,
                                                                          ariaHidden: false
                                                                        }
                                                                      ),
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Text,
                                                                        {
                                                                          key: "p.AgentCommons.Version_NewEdit.text3",
                                                                          $widgetId: "p.AgentCommons.Version_NewEdit.text3",
                                                                          class: "mx-name-text3 badge-text text-small",
                                                                          style: void 0,
                                                                          caption: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "literal", "value": "Currently in use" }, "args": {} }
                                                                            })
                                                                          ]),
                                                                          renderMode: "span"
                                                                        }
                                                                      )
                                                                    ],
                                                                    ariaHidden: false
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ],
                                                        ariaHidden: false
                                                      }
                                                    )
                                                  ]
                                                }),
                                                optionsSourceDatabaseCustomContentType: "no",
                                                staticDataSourceCustomContentType: "no",
                                                showFooter: false,
                                                menuFooterContent: void 0,
                                                selectionMethod: "rowclick",
                                                selectedItemsStyle: "text",
                                                selectAllButton: false,
                                                selectAllButtonCaption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                  })
                                                ]),
                                                readOnlyStyle: "text",
                                                onChangeEvent: void 0,
                                                onEnterEvent: void 0,
                                                onLeaveEvent: void 0,
                                                ariaRequired: false,
                                                clearButtonAriaLabel: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                  })
                                                ]),
                                                removeValueAriaLabel: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                  })
                                                ]),
                                                a11ySelectedValue: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                  })
                                                ]),
                                                a11yOptionsAvailable: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                  })
                                                ]),
                                                a11yInstructions: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                  })
                                                ]),
                                                lazyLoading: true,
                                                loadingType: "spinner",
                                                tabIndex: void 0,
                                                id: DerivedUniqueIdProperty({
                                                  "widgetId": "p.AgentCommons.Version_NewEdit.comboBox3"
                                                })
                                              }
                                            )
                                          ],
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Check Agent Version In Use (change if necessary)" }, "args": {} }
                                            })
                                          ]),
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.Version_NewEdit.comboBox3"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.Version_NewEdit.comboBox3"
                                          })
                                        }
                                      )
                                    ],
                                    hideFooter: false,
                                    footer: void 0
                                  }
                                )
                              ],
                              hideFooter: false,
                              footer: void 0
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.AgentCommons.Version_NewEdit.actionButton1$visibility",
                              $widgetId: "p.AgentCommons.Version_NewEdit.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.AgentCommons.Version_NewEdit.actionButton1",
                                    $widgetId: "p.AgentCommons.Version_NewEdit.actionButton1",
                                    buttonId: "p.AgentCommons.Version_NewEdit.actionButton1",
                                    class: "mx-name-actionButton1 pull-right spacing-outer-left",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-primary",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "Version": { "widget": "$Version", "source": "object" }, "PageHelper": { "widget": "$PageHelper", "source": "object" }, "Version_Draft": { "widget": "$Version_Draft", "source": "object" }, "Agent": { "widget": "$Agent", "source": "object" } }, "config": { "operationId": "cyRJ5XvXFVmI4cv6dnOg1w", "progress": { "message": selectTranslation(["Saving.."]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.AgentCommons.Version_NewEdit.actionButton2",
                              $widgetId: "p.AgentCommons.Version_NewEdit.actionButton2",
                              buttonId: "p.AgentCommons.Version_NewEdit.actionButton2",
                              class: "mx-name-actionButton2 pull-right",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "sMpBJXmn1ViJFxg/1RYBsQ", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Edit agent version"
]);
const classes = "";
const cancelChangesOperationId = "Ac59LTccplWJf6pqnIldXA";
const closeButton = "p.AgentCommons.Version_NewEdit.actionButton2";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
