import { reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { AssociationObjectListProperty } from '../AssociationObjectListProperty-EcNik3ti.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-iFOPmzlY.js';
import { AssociationProperty } from '../AssociationProperty-vuO-mMD-.js';
import '../AttributeProperty-DPm6A02S.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-DirRMZIL.js';
import { ListAttributeProperty } from '../ListAttributeProperty-dWq-nfHX.js';
import { MicroflowObjectProperty } from '../MicroflowObjectProperty-D79UAin-.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-CgBaKmKA.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { FormGroup, ValidationProperty } from '../FormGroup-bFu0BNb6.js';
import { WebIconProperty } from '../WebIconProperty-I8EGGvK6.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-B3bpPygB.js';
import { ComboboxWidgetModule } from '../Combobox-BIE6CPmt.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BilSZaU4.js';
import { Container } from '../Container-PSi6m2QL.js';
import { DataView } from '../DataView-RrZIPNzV.js';
import { Div } from '../Div-DnhZCXw4.js';
import '../Fragment-kXArd_1S.js';
import { ImageWidgetModule } from '../Image-Cid1Yr5n.js';
import { SwitchWidgetModule } from '../Switch-M5IAxH5c.js';
import { Text } from '../Text-Ct6rfb-k.js';
import { TextArea } from '../TextArea-CLTGOhN2.js';
import { TextBox } from '../TextBox-CWp8bmf4.js';
import { TooltipWidgetModule } from '../Tooltip-wE3mB9aV.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-B5WEKHCX.js';
import { AttributeProperty } from '../CTQxk13g-CU8g3epp.js';
import '../BMuJrVqQ-CWJgr9IB.js';
import '../CxMFexew-CFDhnrRu.js';
import '../UeptbR6O-Dse5KB9T.js';
import '../uEIG9e6s-VBk3qU43.js';
import '../CkBXggmw-D1iecObi.js';
import '../CxoxYXlg-BJ3P5g_E.js';
import '../CTcC6PjV-eX91G0mv.js';
import '../bdxqAC6d-BooPaEdW.js';
import '../index-BP8nYpIk.js';
import '../InlineText-f914ePRH.js';
import '../B6nacfjo-DRlmgVxc.js';
import '../B7_8A3ct-PtP2BrDi.js';
import '../F-L0MxFU-CBWLJP8y.js';
import '../ScrollContainer-DO1bE89X.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const Switch = Object.getOwnPropertyDescriptor(SwitchWidgetModule, "Switch")?.value || Object.getOwnPropertyDescriptor(SwitchWidgetModule, "default")?.value;
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;
const { $Div, $DataView, $Container, $Text, $Tooltip, $ConditionalVisibilityWrapper, $ActionButton, $FormGroup, $Combobox, $Image, $Fragment, $Switch, $TextBox, $TextArea } = asPluginWidgets({ Div, DataView, Container, Text, Tooltip, ConditionalVisibilityWrapper, ActionButton, FormGroup, Combobox, Image, Fragment, Switch, TextBox, TextArea });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.AgentCommons.Tool_NewEdit.layoutGrid1",
      $widgetId: "p.AgentCommons.Tool_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AgentCommons.Tool_NewEdit.layoutGrid1$row0",
            $widgetId: "p.AgentCommons.Tool_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AgentCommons.Tool_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.AgentCommons.Tool_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.AgentCommons.Tool_NewEdit.dataView6",
                        $widgetId: "p.AgentCommons.Tool_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.24",
                          "scope": "$Tool",
                          "editable": true
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
                              key: "p.AgentCommons.Tool_NewEdit.container3",
                              $widgetId: "p.AgentCommons.Tool_NewEdit.container3",
                              class: "mx-name-container3",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.Tool_NewEdit.container39",
                                    $widgetId: "p.AgentCommons.Tool_NewEdit.container39",
                                    class: "mx-name-container39 row-left",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.AgentCommons.Tool_NewEdit.text3",
                                          $widgetId: "p.AgentCommons.Tool_NewEdit.text3",
                                          class: "mx-name-text3 custom-control-label",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Tool action module*" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.AgentCommons.Tool_NewEdit.container44",
                                          $widgetId: "p.AgentCommons.Tool_NewEdit.container44",
                                          class: "mx-name-container44 icon-info-wrapper",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Tooltip,
                                              {
                                                key: "p.AgentCommons.Tool_NewEdit.tooltip3",
                                                $widgetId: "p.AgentCommons.Tool_NewEdit.tooltip3",
                                                trigger: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AgentCommons.Tool_NewEdit.actionButton22$visibility",
                                                      $widgetId: "p.AgentCommons.Tool_NewEdit.actionButton22$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.AgentCommons.Tool_NewEdit.actionButton22",
                                                            $widgetId: "p.AgentCommons.Tool_NewEdit.actionButton22",
                                                            buttonId: "p.AgentCommons.Tool_NewEdit.actionButton22",
                                                            class: "mx-name-actionButton22 spacing-outer-left spacing-outer-right",
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
                                                              "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$info_circle_grey.svg" }
                                                            }),
                                                            action: ActionProperty({
                                                              "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                      key: "p.AgentCommons.Tool_NewEdit.container103",
                                                      $widgetId: "p.AgentCommons.Tool_NewEdit.container103",
                                                      class: "mx-name-container103 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.AgentCommons.Tool_NewEdit.text45",
                                                            $widgetId: "p.AgentCommons.Tool_NewEdit.text45",
                                                            class: "mx-name-text45 text-normal text-break text-small",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Select the microflow you want to be executed as tool call. Only microflows that have a String return value (and modules containing such) will be shown." }, "args": {} }
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
                                                class: "mx-name-tooltip3 agent-tooltip",
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
                                  $DataView,
                                  {
                                    key: "p.AgentCommons.Tool_NewEdit.dataView1",
                                    $widgetId: "p.AgentCommons.Tool_NewEdit.dataView1",
                                    class: "mx-name-dataView1 form-vertical",
                                    style: void 0,
                                    tabIndex: void 0,
                                    object: MicroflowObjectProperty({
                                      "dataSourceId": "p.42",
                                      "scope": "p.AgentCommons.Tool_NewEdit.dataView6",
                                      "editable": true,
                                      "operationId": "y29LoxtB91mhwNC2FDKwxw",
                                      "argMap": { "Tool": { "widget": "$Tool", "source": "object" } }
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
                                          key: "p.AgentCommons.Tool_NewEdit.comboBox2$formGroup",
                                          $widgetId: "p.AgentCommons.Tool_NewEdit.comboBox2$formGroup",
                                          class: "mx-name-comboBox2",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $Combobox,
                                              {
                                                key: "p.AgentCommons.Tool_NewEdit.comboBox2",
                                                $widgetId: "p.AgentCommons.Tool_NewEdit.comboBox2",
                                                source: "context",
                                                optionsSourceType: "association",
                                                optionsSourceDatabaseDataSource: void 0,
                                                optionsSourceAssociationCaptionType: "attribute",
                                                optionsSourceDatabaseCaptionType: "attribute",
                                                optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                                  "path": "",
                                                  "entity": "AgentCommons.Module",
                                                  "attribute": "ModuleName",
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
                                                  "entity": "AgentCommons.MicroflowSelection",
                                                  "path": "",
                                                  "attribute": "AgentCommons.MicroflowSelection_Module_Active",
                                                  "endpointEntity": "AgentCommons.Module",
                                                  "selectableObjectsId": "p.2",
                                                  "scope": "p.AgentCommons.Tool_NewEdit.dataView1",
                                                  "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                }),
                                                optionsSourceAssociationDataSource: AssociationObjectListProperty({
                                                  "dataSourceId": "p.2",
                                                  "entity": "AgentCommons.Module",
                                                  "scope": "p.AgentCommons.Tool_NewEdit.dataView1",
                                                  "operationId": "TCGBLK/iX1io72xHXqGygg",
                                                  "directPath": "AgentCommons.MicroflowSelection_Module/AgentCommons.Module"
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
                                                        key: "p.AgentCommons.Tool_NewEdit.container7",
                                                        $widgetId: "p.AgentCommons.Tool_NewEdit.container7",
                                                        class: "mx-name-container7 row-left",
                                                        style: void 0,
                                                        renderMode: "div",
                                                        onClick: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Image,
                                                            {
                                                              key: "p.AgentCommons.Tool_NewEdit.staticImage3",
                                                              $widgetId: "p.AgentCommons.Tool_NewEdit.staticImage3",
                                                              datasource: "image",
                                                              imageObject: WebStaticImageProperty({
                                                                "image": { "uri": "img/AgentCommons$Images_AgentBuilder$Module.svg" }
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
                                                              class: "mx-name-staticImage3 img--22-22",
                                                              style: void 0,
                                                              tabIndex: void 0
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Text,
                                                            {
                                                              key: "p.AgentCommons.Tool_NewEdit.text2",
                                                              $widgetId: "p.AgentCommons.Tool_NewEdit.text2",
                                                              class: "mx-name-text2 spacing-outer-left",
                                                              style: void 0,
                                                              caption: selectTranslation([
                                                                ExpressionProperty({
                                                                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ModuleName" }, "args": { "currentObject": { "widget": "p.AgentCommons.Tool_NewEdit.comboBox2", "source": "object" } } }
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
                                                onChangeEvent: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": { "MicroflowSelection": { "widget": "p.AgentCommons.Tool_NewEdit.dataView1", "source": "object" } }, "config": { "operationId": "Td1gldmVeFeJdTqqoIrfvg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                  "argumentTypes": {}
                                                }),
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
                                                  "widgetId": "p.AgentCommons.Tool_NewEdit.comboBox2"
                                                })
                                              }
                                            )
                                          ],
                                          caption: void 0,
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.Tool_NewEdit.comboBox2"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.Tool_NewEdit.comboBox2"
                                          })
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.AgentCommons.Tool_NewEdit.comboBox1$formGroup",
                                          $widgetId: "p.AgentCommons.Tool_NewEdit.comboBox1$formGroup",
                                          class: "mx-name-comboBox1",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $Combobox,
                                              {
                                                key: "p.AgentCommons.Tool_NewEdit.comboBox1",
                                                $widgetId: "p.AgentCommons.Tool_NewEdit.comboBox1",
                                                source: "context",
                                                optionsSourceType: "association",
                                                optionsSourceDatabaseDataSource: void 0,
                                                optionsSourceAssociationCaptionType: "attribute",
                                                optionsSourceDatabaseCaptionType: "attribute",
                                                optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                                  "path": "",
                                                  "entity": "AgentCommons.Microflow",
                                                  "attribute": "MicroflowName",
                                                  "attributeType": "String",
                                                  "sortable": true,
                                                  "filterable": true,
                                                  "dataSourceId": "p.3",
                                                  "isList": false
                                                }),
                                                optionsSourceAssociationCaptionExpression: void 0,
                                                optionsSourceDatabaseDefaultValue: void 0,
                                                attributeAssociation: AssociationProperty({
                                                  "type": "Reference",
                                                  "entity": "AgentCommons.MicroflowSelection",
                                                  "path": "",
                                                  "attribute": "AgentCommons.MicroflowSelection_Microflow_Active",
                                                  "endpointEntity": "AgentCommons.Microflow",
                                                  "selectableObjectsId": "p.3",
                                                  "scope": "p.AgentCommons.Tool_NewEdit.dataView1",
                                                  "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                  "isEditable": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "AgentCommons.MicroflowSelection_Module_Active" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Tool_NewEdit.dataView1", "source": "object" } } }
                                                }),
                                                optionsSourceAssociationDataSource: AssociationObjectListProperty({
                                                  "dataSourceId": "p.3",
                                                  "entity": "AgentCommons.Microflow",
                                                  "scope": "p.AgentCommons.Tool_NewEdit.dataView1",
                                                  "operationId": "Jz/g4aBqI1qOlNhvfIL5Uw",
                                                  "directPath": "AgentCommons.MicroflowSelection_Microflow/AgentCommons.Microflow"
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
                                                  "dataSourceId": "p.3",
                                                  "editable": false,
                                                  "children": () => [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Container,
                                                      {
                                                        key: "p.AgentCommons.Tool_NewEdit.container6",
                                                        $widgetId: "p.AgentCommons.Tool_NewEdit.container6",
                                                        class: "mx-name-container6 row-left",
                                                        style: void 0,
                                                        renderMode: "div",
                                                        onClick: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Image,
                                                            {
                                                              key: "p.AgentCommons.Tool_NewEdit.staticImage2",
                                                              $widgetId: "p.AgentCommons.Tool_NewEdit.staticImage2",
                                                              datasource: "image",
                                                              imageObject: WebStaticImageProperty({
                                                                "image": { "uri": "img/AgentCommons$Images_AgentBuilder$microflow.svg" }
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
                                                              class: "mx-name-staticImage2 img--22-22",
                                                              style: void 0,
                                                              tabIndex: void 0
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Text,
                                                            {
                                                              key: "p.AgentCommons.Tool_NewEdit.text1",
                                                              $widgetId: "p.AgentCommons.Tool_NewEdit.text1",
                                                              class: "mx-name-text1 spacing-outer-left",
                                                              style: void 0,
                                                              caption: selectTranslation([
                                                                ExpressionProperty({
                                                                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "MicroflowName" }, "args": { "currentObject": { "widget": "p.AgentCommons.Tool_NewEdit.comboBox1", "source": "object" } } }
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
                                                readOnlyStyle: "bordered",
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
                                                lazyLoading: false,
                                                loadingType: "spinner",
                                                tabIndex: void 0,
                                                id: DerivedUniqueIdProperty({
                                                  "widgetId": "p.AgentCommons.Tool_NewEdit.comboBox1"
                                                })
                                              }
                                            )
                                          ],
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Microflow*" }, "args": {} }
                                            })
                                          ]),
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.Tool_NewEdit.comboBox1"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.Tool_NewEdit.comboBox1"
                                          })
                                        }
                                      )
                                    ],
                                    hideFooter: false,
                                    footer: void 0
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.Tool_NewEdit.container4",
                              $widgetId: "p.AgentCommons.Tool_NewEdit.container4",
                              class: "mx-name-container4",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Fragment,
                                  {
                                    key: "p.AgentCommons.Tool_NewEdit.snippetCall1",
                                    $widgetId: "p.AgentCommons.Tool_NewEdit.snippetCall1",
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.AgentCommons.Snippet_Tool_Enable.container8",
                                          $widgetId: "p.AgentCommons.Snippet_Tool_Enable.container8",
                                          class: "mx-name-container8 col-left",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.AgentCommons.Snippet_Tool_Enable.container48",
                                                $widgetId: "p.AgentCommons.Snippet_Tool_Enable.container48",
                                                class: "mx-name-container48 row-left",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.Snippet_Tool_Enable.text6",
                                                      $widgetId: "p.AgentCommons.Snippet_Tool_Enable.text6",
                                                      class: "mx-name-text6 custom-control-label",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Enabled" }, "args": {} }
                                                        })
                                                      ]),
                                                      renderMode: "span"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.AgentCommons.Snippet_Tool_Enable.container49",
                                                      $widgetId: "p.AgentCommons.Snippet_Tool_Enable.container49",
                                                      class: "mx-name-container49 icon-info-wrapper",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Tooltip,
                                                          {
                                                            key: "p.AgentCommons.Snippet_Tool_Enable.tooltip7",
                                                            $widgetId: "p.AgentCommons.Snippet_Tool_Enable.tooltip7",
                                                            trigger: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.AgentCommons.Snippet_Tool_Enable.actionButton26$visibility",
                                                                  $widgetId: "p.AgentCommons.Snippet_Tool_Enable.actionButton26$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ActionButton,
                                                                      {
                                                                        key: "p.AgentCommons.Snippet_Tool_Enable.actionButton26",
                                                                        $widgetId: "p.AgentCommons.Snippet_Tool_Enable.actionButton26",
                                                                        buttonId: "p.AgentCommons.Snippet_Tool_Enable.actionButton26",
                                                                        class: "mx-name-actionButton26 spacing-outer-left spacing-outer-right",
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
                                                                          "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$info_circle_grey.svg" }
                                                                        }),
                                                                        action: ActionProperty({
                                                                          "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                  key: "p.AgentCommons.Snippet_Tool_Enable.container107",
                                                                  $widgetId: "p.AgentCommons.Snippet_Tool_Enable.container107",
                                                                  class: "mx-name-container107 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Text,
                                                                      {
                                                                        key: "p.AgentCommons.Snippet_Tool_Enable.text48",
                                                                        $widgetId: "p.AgentCommons.Snippet_Tool_Enable.text48",
                                                                        class: "mx-name-text48 text-normal text-break text-small",
                                                                        style: void 0,
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "The LLM is only aware of enabled tools and, as such, cannot call disabled tools. This holds for this Agent Builder interface as well as the Agent being used in the app logic. Disabling a tool can help during development to (temporarily) exclude a tool. It prevents having to add it back from scratch when it is needed again later." }, "args": {} }
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
                                                            class: "mx-name-tooltip7 agent-tooltip",
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
                                                key: "p.AgentCommons.Snippet_Tool_Enable.switch1$formGroup",
                                                $widgetId: "p.AgentCommons.Snippet_Tool_Enable.switch1$formGroup",
                                                class: "mx-name-switch1 switch",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Switch,
                                                    {
                                                      key: "p.AgentCommons.Snippet_Tool_Enable.switch1",
                                                      $widgetId: "p.AgentCommons.Snippet_Tool_Enable.switch1",
                                                      booleanAttribute: AttributeProperty({
                                                        "scope": "$Tool",
                                                        "path": "",
                                                        "entity": "AgentCommons.Tool",
                                                        "attribute": "IsEnabled",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                        "isList": false
                                                      }),
                                                      action: ActionProperty({
                                                        "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                        "argumentTypes": {}
                                                      }),
                                                      tabIndex: void 0,
                                                      id: DerivedUniqueIdProperty({
                                                        "widgetId": "p.AgentCommons.Snippet_Tool_Enable.switch1"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: void 0,
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.AgentCommons.Snippet_Tool_Enable.switch1"
                                                }),
                                                width: void 0,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.AgentCommons.Snippet_Tool_Enable.switch1"
                                                })
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
                                  $Container,
                                  {
                                    key: "p.AgentCommons.Tool_NewEdit.container40",
                                    $widgetId: "p.AgentCommons.Tool_NewEdit.container40",
                                    class: "mx-name-container40 row-left",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.AgentCommons.Tool_NewEdit.text4",
                                          $widgetId: "p.AgentCommons.Tool_NewEdit.text4",
                                          class: "mx-name-text4 custom-control-label",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Name*" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.AgentCommons.Tool_NewEdit.container45",
                                          $widgetId: "p.AgentCommons.Tool_NewEdit.container45",
                                          class: "mx-name-container45 icon-info-wrapper",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Tooltip,
                                              {
                                                key: "p.AgentCommons.Tool_NewEdit.tooltip5",
                                                $widgetId: "p.AgentCommons.Tool_NewEdit.tooltip5",
                                                trigger: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AgentCommons.Tool_NewEdit.actionButton24$visibility",
                                                      $widgetId: "p.AgentCommons.Tool_NewEdit.actionButton24$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.AgentCommons.Tool_NewEdit.actionButton24",
                                                            $widgetId: "p.AgentCommons.Tool_NewEdit.actionButton24",
                                                            buttonId: "p.AgentCommons.Tool_NewEdit.actionButton24",
                                                            class: "mx-name-actionButton24 spacing-outer-left spacing-outer-right",
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
                                                              "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$info_circle_grey.svg" }
                                                            }),
                                                            action: ActionProperty({
                                                              "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                      key: "p.AgentCommons.Tool_NewEdit.container105",
                                                      $widgetId: "p.AgentCommons.Tool_NewEdit.container105",
                                                      class: "mx-name-container105 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.AgentCommons.Tool_NewEdit.text46",
                                                            $widgetId: "p.AgentCommons.Tool_NewEdit.text46",
                                                            class: "mx-name-text46 text-normal text-break text-small",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "This is the name of the tool that is sent to the LLM: it can only contain alphanumeric characters.\r\nIt is used in combination with the description by the model to determine whether calling this tool is necessary and when." }, "args": {} }
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
                                                class: "mx-name-tooltip5 agent-tooltip",
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
                                    key: "p.AgentCommons.Tool_NewEdit.textBox1$formGroup",
                                    $widgetId: "p.AgentCommons.Tool_NewEdit.textBox1$formGroup",
                                    class: "mx-name-textBox1 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p.AgentCommons.Tool_NewEdit.textBox1",
                                          $widgetId: "p.AgentCommons.Tool_NewEdit.textBox1",
                                          inputValue: AttributeProperty({
                                            "scope": "p.AgentCommons.Tool_NewEdit.dataView6",
                                            "path": "",
                                            "entity": "AgentCommons.Tool",
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
                                          ariaLabel: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          autocomplete: "on",
                                          submitWhileEditing: false,
                                          submitDelay: 300,
                                          ariaRequired: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.Tool_NewEdit.textBox1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: void 0,
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.AgentCommons.Tool_NewEdit.textBox1"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.AgentCommons.Tool_NewEdit.textBox1"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.Tool_NewEdit.container43",
                                    $widgetId: "p.AgentCommons.Tool_NewEdit.container43",
                                    class: "mx-name-container43 row-left",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.AgentCommons.Tool_NewEdit.text5",
                                          $widgetId: "p.AgentCommons.Tool_NewEdit.text5",
                                          class: "mx-name-text5 custom-control-label",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Description*" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.AgentCommons.Tool_NewEdit.container46",
                                          $widgetId: "p.AgentCommons.Tool_NewEdit.container46",
                                          class: "mx-name-container46 icon-info-wrapper",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Tooltip,
                                              {
                                                key: "p.AgentCommons.Tool_NewEdit.tooltip6",
                                                $widgetId: "p.AgentCommons.Tool_NewEdit.tooltip6",
                                                trigger: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AgentCommons.Tool_NewEdit.actionButton25$visibility",
                                                      $widgetId: "p.AgentCommons.Tool_NewEdit.actionButton25$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.AgentCommons.Tool_NewEdit.actionButton25",
                                                            $widgetId: "p.AgentCommons.Tool_NewEdit.actionButton25",
                                                            buttonId: "p.AgentCommons.Tool_NewEdit.actionButton25",
                                                            class: "mx-name-actionButton25 spacing-outer-left spacing-outer-right",
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
                                                              "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$info_circle_grey.svg" }
                                                            }),
                                                            action: ActionProperty({
                                                              "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                      key: "p.AgentCommons.Tool_NewEdit.container106",
                                                      $widgetId: "p.AgentCommons.Tool_NewEdit.container106",
                                                      class: "mx-name-container106 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.AgentCommons.Tool_NewEdit.text47",
                                                            $widgetId: "p.AgentCommons.Tool_NewEdit.text47",
                                                            class: "mx-name-text47 text-normal text-break text-small",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "This is a description for the LLM that explains in human language what the tool does and what it returns. The string value returned is used by the agent to determine next steps.\r\nIt is used in combination with the name by the model to determine what tool calls are necessary and when." }, "args": {} }
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
                                                class: "mx-name-tooltip6 agent-tooltip",
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
                                    key: "p.AgentCommons.Tool_NewEdit.textArea1$formGroup",
                                    $widgetId: "p.AgentCommons.Tool_NewEdit.textArea1$formGroup",
                                    class: "mx-name-textArea1 mx-textarea",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextArea,
                                        {
                                          key: "p.AgentCommons.Tool_NewEdit.textArea1",
                                          $widgetId: "p.AgentCommons.Tool_NewEdit.textArea1",
                                          inputValue: AttributeProperty({
                                            "scope": "p.AgentCommons.Tool_NewEdit.dataView6",
                                            "path": "",
                                            "entity": "AgentCommons.Tool",
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
                                          maxLength: 4096,
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
                                          ariaLabel: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          ariaRequired: void 0,
                                          submitWhileEditing: false,
                                          submitDelay: 300,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.Tool_NewEdit.textArea1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: void 0,
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.AgentCommons.Tool_NewEdit.textArea1"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.AgentCommons.Tool_NewEdit.textArea1"
                                    })
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.Tool_NewEdit.container5",
                              $widgetId: "p.AgentCommons.Tool_NewEdit.container5",
                              class: "mx-name-container5",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.Tool_NewEdit.container2",
                                    $widgetId: "p.AgentCommons.Tool_NewEdit.container2",
                                    class: "mx-name-container2 pull-left",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.AgentCommons.Tool_NewEdit.actionButton18$visibility",
                                          $widgetId: "p.AgentCommons.Tool_NewEdit.actionButton18$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.AgentCommons.Tool_NewEdit.actionButton18",
                                                $widgetId: "p.AgentCommons.Tool_NewEdit.actionButton18",
                                                buttonId: "p.AgentCommons.Tool_NewEdit.actionButton18",
                                                class: "mx-name-actionButton18 btn-without-border-red",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "button",
                                                role: void 0,
                                                buttonClass: "btn-default",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    ""
                                                  ])
                                                }),
                                                icon: WebIconProperty({
                                                  "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$trash_can_red.svg" }
                                                }),
                                                action: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": { "Tool": { "widget": "$Tool", "source": "object" } }, "config": { "operationId": "7ZdWmAvSvl2aSPXKla5uCw", "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure?"]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                  "abortOnServerValidation": true
                                                })
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.Tool_NewEdit.container1",
                                    $widgetId: "p.AgentCommons.Tool_NewEdit.container1",
                                    class: "mx-name-container1 row-right",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.AgentCommons.Tool_NewEdit.actionButton2",
                                          $widgetId: "p.AgentCommons.Tool_NewEdit.actionButton2",
                                          buttonId: "p.AgentCommons.Tool_NewEdit.actionButton2",
                                          class: "mx-name-actionButton2 spacing-outer-right-medium",
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "r0YiSgkso1miT7AwPk6mBw", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.AgentCommons.Tool_NewEdit.actionButton1$visibility",
                                          $widgetId: "p.AgentCommons.Tool_NewEdit.actionButton1$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.AgentCommons.Tool_NewEdit.actionButton1",
                                                $widgetId: "p.AgentCommons.Tool_NewEdit.actionButton1",
                                                buttonId: "p.AgentCommons.Tool_NewEdit.actionButton1",
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
                                                  "action": { "type": "callMicroflow", "argMap": { "Tool": { "widget": "$Tool", "source": "object" } }, "config": { "operationId": "yH+ZbH0WqlmmX9zdgAUCkw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                  "abortOnServerValidation": true
                                                })
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                )
                              ],
                              ariaHidden: false
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
  "Edit tool"
]);
const classes = "";
const cancelChangesOperationId = "EvnYkw62IFuiVyrQVIulBw";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
