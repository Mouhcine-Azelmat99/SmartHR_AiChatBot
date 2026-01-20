import { reactExports, asPluginWidgets, selectTranslation } from '../index-B-pQLZz2.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C1uYYDJ5.js';
import { ActionButton, ActionProperty } from '../ActionButton-C47bDiwH.js';
import { AssociationObjectListProperty } from '../AssociationObjectListProperty-HKkAiyBV.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BrlLyOx6.js';
import { AssociationProperty } from '../AssociationProperty-Dro-5rqe.js';
import '../AttributeProperty-CBmdvzfK.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-QeaM9GtQ.js';
import { ListAttributeProperty } from '../ListAttributeProperty-CJPrRUfN.js';
import { MicroflowObjectProperty } from '../MicroflowObjectProperty-BXvprvCj.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-viDAZSOp.js';
import { TextProperty } from '../TextProperty-ukMsrrP8.js';
import { FormGroup, ValidationProperty } from '../FormGroup-yCagykDW.js';
import { WebIconProperty } from '../WebIconProperty-B4eQIHHv.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-D6HpETLo.js';
import { ComboboxWidgetModule } from '../Combobox-DFFkbHK0.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C-2xhd5O.js';
import { Container } from '../Container-CTbE-yQS.js';
import { DataView } from '../DataView-DtIsQy7l.js';
import { Div } from '../Div-C2k8MuH7.js';
import { ImageWidgetModule } from '../Image-CwuIpbpH.js';
import { RadioButtonGroup } from '../RadioButtonGroup-Dw7gZsmC.js';
import { Text } from '../Text-5NmEA291.js';
import { TextBox } from '../TextBox-C2Olp2tK.js';
import { TooltipWidgetModule } from '../Tooltip-BBhx9N9q.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-D5lHkh-a.js';
import { AttributeProperty } from '../CTQxk13g-BDTc581w.js';
import '../BMuJrVqQ-C_cqhczO.js';
import '../CxMFexew-C1GWnP8G.js';
import '../UeptbR6O-9Cnv5Sxb.js';
import '../uEIG9e6s-CoI72Q4o.js';
import '../CkBXggmw-CEa7-Kz-.js';
import '../CxoxYXlg-rXnL4f6K.js';
import '../CTcC6PjV-CLE6jBCq.js';
import '../bdxqAC6d-ISZWqfJE.js';
import '../index-CgEeXS6W.js';
import '../B7_8A3ct-CdkfAVjR.js';
import '../F-L0MxFU-D5sOd2X2.js';
import '../DxNyuBBG-CO3699Ph.js';
import '../InlineText-CcVi-f0x.js';
import '../B6nacfjo-Di-qGXS2.js';
import '../ScrollContainer-B-pXvHDA.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;
const { $Div, $DataView, $FormGroup, $TextBox, $RadioButtonGroup, $Container, $Text, $Tooltip, $ConditionalVisibilityWrapper, $ActionButton, $Combobox, $Image } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, RadioButtonGroup, Container, Text, Tooltip, ConditionalVisibilityWrapper, ActionButton, Combobox, Image });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MCPClient.MCPServerConfiguration_NewEdit.layoutGrid1",
      $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MCPClient.MCPServerConfiguration_NewEdit.layoutGrid1$row0",
            $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MCPClient.MCPServerConfiguration_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.MCPClient.MCPServerConfiguration_NewEdit.dataView1",
                        $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.dataView1",
                        class: "mx-name-dataView1 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.15",
                          "scope": "$MCPServerConfiguration",
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
                              key: "p.MCPClient.MCPServerConfiguration_NewEdit.textBox2$formGroup",
                              $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.textBox2$formGroup",
                              class: "mx-name-textBox2 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.MCPClient.MCPServerConfiguration_NewEdit.textBox2",
                                    $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.textBox2",
                                    inputValue: AttributeProperty({
                                      "scope": "p.MCPClient.MCPServerConfiguration_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "MCPClient.MCPServerConfiguration",
                                      "attribute": "Name",
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
                                    maxLength: 200,
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
                                      "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.textBox2"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.textBox2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.textBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MCPClient.MCPServerConfiguration_NewEdit.textBox1$formGroup",
                              $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.MCPClient.MCPServerConfiguration_NewEdit.textBox1",
                                    $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.MCPClient.MCPServerConfiguration_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "MCPClient.MCPServerConfiguration",
                                      "attribute": "MCPEndpoint",
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
                                    maxLength: void 0,
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
                                      "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.textBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "MCP endpoint" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.textBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.textBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MCPClient.MCPServerConfiguration_NewEdit.textBox3$formGroup",
                              $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.textBox3$formGroup",
                              class: "mx-name-textBox3 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.MCPClient.MCPServerConfiguration_NewEdit.textBox3",
                                    $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.textBox3",
                                    inputValue: AttributeProperty({
                                      "scope": "p.MCPClient.MCPServerConfiguration_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "MCPClient.MCPServerConfiguration",
                                      "attribute": "Version",
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
                                    maxLength: 200,
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
                                      "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.textBox3"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Version" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.textBox3"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.textBox3"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MCPClient.MCPServerConfiguration_NewEdit.radioButtons1$formGroup",
                              $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.radioButtons1$formGroup",
                              class: "mx-name-radioButtons1 mx-radiobuttons inline",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $RadioButtonGroup,
                                  {
                                    key: "p.MCPClient.MCPServerConfiguration_NewEdit.radioButtons1",
                                    $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.radioButtons1",
                                    value: AttributeProperty({
                                      "scope": "p.MCPClient.MCPServerConfiguration_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "MCPClient.MCPServerConfiguration",
                                      "attribute": "ProtocolVersion",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null
                                    }),
                                    readOnlyStyle: "control",
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    ariaLabel: void 0,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.radioButtons1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Protocol version" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.radioButtons1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.radioButtons1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $DataView,
                            {
                              key: "p.MCPClient.MCPServerConfiguration_NewEdit.dataView3",
                              $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.dataView3",
                              class: "mx-name-dataView3 form-vertical",
                              style: void 0,
                              tabIndex: void 0,
                              object: MicroflowObjectProperty({
                                "dataSourceId": "p.30",
                                "scope": "p.MCPClient.MCPServerConfiguration_NewEdit.dataView1",
                                "editable": true,
                                "operationId": "9v/zW+abTFWmrO5d/I4iaQ",
                                "argMap": { "MCPServerConfiguration": { "widget": "$MCPServerConfiguration", "source": "object" } }
                              }),
                              emptyMessage: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              body: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.MCPClient.MCPServerConfiguration_NewEdit.container54",
                                    $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.container54",
                                    class: "mx-name-container54 row-left",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.MCPClient.MCPServerConfiguration_NewEdit.text8",
                                          $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.text8",
                                          class: "mx-name-text8 custom-control-label",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Get credentials microflow (optional)" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.MCPClient.MCPServerConfiguration_NewEdit.container55",
                                          $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.container55",
                                          class: "mx-name-container55 icon-info-wrapper",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Tooltip,
                                              {
                                                key: "p.MCPClient.MCPServerConfiguration_NewEdit.tooltip9",
                                                $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.tooltip9",
                                                trigger: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.MCPClient.MCPServerConfiguration_NewEdit.actionButton28$visibility",
                                                      $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.actionButton28$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.MCPClient.MCPServerConfiguration_NewEdit.actionButton28",
                                                            $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.actionButton28",
                                                            buttonId: "p.MCPClient.MCPServerConfiguration_NewEdit.actionButton28",
                                                            class: "mx-name-actionButton28 spacing-outer-left spacing-outer-right",
                                                            style: void 0,
                                                            tabIndex: void 0,
                                                            renderType: "link",
                                                            role: "button",
                                                            buttonClass: "btn-default",
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                              })
                                                            ]),
                                                            tooltip: TextProperty({
                                                              "value": selectTranslation([
                                                                ""
                                                              ])
                                                            }),
                                                            icon: WebIconProperty({
                                                              "icon": { "type": "image", "iconUrl": "img/MCPClient$Images_MCPClient$info_circle_grey.svg" }
                                                            }),
                                                            action: ActionProperty({
                                                              "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "zFtg1lfSLF63oiQ+hpeOXA", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                              "abortOnServerValidation": true
                                                            })
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ],
                                                renderMethod: "custom",
                                                htmlMessage: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.MCPClient.MCPServerConfiguration_NewEdit.container109",
                                                      $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.container109",
                                                      class: "mx-name-container109 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.MCPClient.MCPServerConfiguration_NewEdit.text50",
                                                            $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.text50",
                                                            class: "mx-name-text50 text-normal text-break text-small",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Select a microflow that contains credentials that can be used to authenticate to the MCP server. The microflow needs to return a list of System.HttpHeader objects. Input parameters are not allowed." }, "args": {} }
                                                              })
                                                            ]),
                                                            renderMode: "span"
                                                          }
                                                        )
                                                      ],
                                                      ariaHidden: false
                                                    }
                                                  )
                                                ],
                                                textMessage: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                tooltipPosition: "bottom",
                                                arrowPosition: "none",
                                                openOn: "hover",
                                                class: "mx-name-tooltip9 agent-tooltip",
                                                style: void 0,
                                                tabIndex: void 0
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.MCPClient.MCPServerConfiguration_NewEdit.comboBox1$formGroup",
                                    $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.comboBox1$formGroup",
                                    class: "mx-name-comboBox1",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Combobox,
                                        {
                                          key: "p.MCPClient.MCPServerConfiguration_NewEdit.comboBox1",
                                          $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.comboBox1",
                                          source: "context",
                                          optionsSourceType: "association",
                                          optionsSourceDatabaseDataSource: void 0,
                                          optionsSourceAssociationCaptionType: "attribute",
                                          optionsSourceDatabaseCaptionType: "attribute",
                                          optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                            "path": "",
                                            "entity": "MCPClient.Microflow",
                                            "attribute": "Name",
                                            "attributeType": "String",
                                            "sortable": true,
                                            "filterable": true,
                                            "dataSourceId": "p.2",
                                            "isList": false
                                          }),
                                          optionsSourceAssociationCaptionExpression: void 0,
                                          optionsSourceDatabaseDefaultValue: void 0,
                                          attributeAssociation: AssociationProperty({
                                            "type": "Reference",
                                            "entity": "MCPClient.MicroflowSelection",
                                            "path": "",
                                            "attribute": "MCPClient.MicroflowSelection_Microflow_Active",
                                            "endpointEntity": "MCPClient.Microflow",
                                            "selectableObjectsId": "p.2",
                                            "scope": "p.MCPClient.MCPServerConfiguration_NewEdit.dataView3",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                          }),
                                          optionsSourceAssociationDataSource: AssociationObjectListProperty({
                                            "dataSourceId": "p.2",
                                            "entity": "MCPClient.Microflow",
                                            "scope": "p.MCPClient.MCPServerConfiguration_NewEdit.dataView3",
                                            "operationId": "TpkTqL7le12tlI5U3u4ISg",
                                            "directPath": "MCPClient.MicroflowSelection_Microflow/MCPClient.Microflow"
                                          }),
                                          optionsSourceStaticDataSource: [],
                                          emptyOptionText: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          filterType: "contains",
                                          noOptionsText: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          clearable: true,
                                          optionsSourceAssociationCustomContentType: "yes",
                                          optionsSourceAssociationCustomContent: TemplatedWidgetProperty({
                                            "dataSourceId": "p.2",
                                            "editable": false,
                                            "children": () => [
                                              /* @__PURE__ */ React.createElement(
                                                $Container,
                                                {
                                                  key: "p.MCPClient.MCPServerConfiguration_NewEdit.container6",
                                                  $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.container6",
                                                  class: "mx-name-container6 row-left",
                                                  style: void 0,
                                                  renderMode: "div",
                                                  onClick: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Image,
                                                      {
                                                        key: "p.MCPClient.MCPServerConfiguration_NewEdit.staticImage2",
                                                        $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.staticImage2",
                                                        datasource: "image",
                                                        imageObject: WebStaticImageProperty({
                                                          "image": { "uri": "img/MCPClient$Images_MCPClient$microflow.svg" }
                                                        }),
                                                        defaultImageDynamic: void 0,
                                                        imageUrl: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                          })
                                                        ]),
                                                        imageIcon: void 0,
                                                        isBackgroundImage: false,
                                                        children: void 0,
                                                        onClickType: "action",
                                                        onClick: void 0,
                                                        alternativeText: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                          })
                                                        ]),
                                                        widthUnit: "auto",
                                                        width: 100,
                                                        heightUnit: "auto",
                                                        height: 100,
                                                        iconSize: 14,
                                                        displayAs: "fullImage",
                                                        responsive: true,
                                                        class: "mx-name-staticImage2 img-22--22",
                                                        style: void 0,
                                                        tabIndex: void 0
                                                      }
                                                    ),
                                                    /* @__PURE__ */ React.createElement(
                                                      $Text,
                                                      {
                                                        key: "p.MCPClient.MCPServerConfiguration_NewEdit.text1",
                                                        $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.text1",
                                                        class: "mx-name-text1 spacing-outer-left-medium",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.MCPClient.MCPServerConfiguration_NewEdit.comboBox1", "source": "object" } } }
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
                                          }),
                                          optionsSourceDatabaseCustomContentType: "no",
                                          staticDataSourceCustomContentType: "no",
                                          showFooter: false,
                                          menuFooterContent: void 0,
                                          selectionMethod: "checkbox",
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
                                            "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.comboBox1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: void 0,
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.comboBox1"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.comboBox1"
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
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.MCPClient.MCPServerConfiguration_NewEdit.actionButton1$visibility",
                              $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.MCPClient.MCPServerConfiguration_NewEdit.actionButton1",
                                    $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.actionButton1",
                                    buttonId: "p.MCPClient.MCPServerConfiguration_NewEdit.actionButton1",
                                    class: "mx-name-actionButton1",
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
                                      "action": { "type": "callMicroflow", "argMap": { "MCPServerConfiguration": { "widget": "$MCPServerConfiguration", "source": "object" } }, "config": { "operationId": "gQiLYunnOlKI3HAhlnQQHg", "progress": { "message": selectTranslation(["Syncing MCP tools. This may take a while."]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                              key: "p.MCPClient.MCPServerConfiguration_NewEdit.actionButton2",
                              $widgetId: "p.MCPClient.MCPServerConfiguration_NewEdit.actionButton2",
                              buttonId: "p.MCPClient.MCPServerConfiguration_NewEdit.actionButton2",
                              class: "mx-name-actionButton2",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "QWH28v66x1WlBXvoEJ8O7w", "closePage": true }, "disabledDuringExecution": true },
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
  "Edit MCP Server"
]);
const classes = "";
const cancelChangesOperationId = "yKGbPebffVCdfDXRGuBvow";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
