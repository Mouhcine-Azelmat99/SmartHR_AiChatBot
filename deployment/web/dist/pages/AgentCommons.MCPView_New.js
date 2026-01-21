import { reactExports, asPluginWidgets, addEnumerations, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { AssociationObjectListProperty } from '../AssociationObjectListProperty-EcNik3ti.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-iFOPmzlY.js';
import { AssociationProperty } from '../AssociationProperty-vuO-mMD-.js';
import '../AttributeProperty-DPm6A02S.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-BEIxbT2n.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-DirRMZIL.js';
import { DynamicClassProperty } from '../DynamicClassProperty-B9uW_Aca.js';
import { ListAttributeProperty } from '../ListAttributeProperty-dWq-nfHX.js';
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
import { ImageWidgetModule } from '../Image-Cid1Yr5n.js';
import { ListView } from '../ListView-CIUHgBvp.js';
import { SwitchWidgetModule } from '../Switch-M5IAxH5c.js';
import { Text } from '../Text-Ct6rfb-k.js';
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
import '../ScrollContainer-DO1bE89X.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const Switch = Object.getOwnPropertyDescriptor(SwitchWidgetModule, "Switch")?.value || Object.getOwnPropertyDescriptor(SwitchWidgetModule, "default")?.value;
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;
const { $Div, $DataView, $Container, $Text, $Tooltip, $ConditionalVisibilityWrapper, $ActionButton, $FormGroup, $Combobox, $Image, $Switch, $ListView } = asPluginWidgets({ Div, DataView, Container, Text, Tooltip, ConditionalVisibilityWrapper, ActionButton, FormGroup, Combobox, Image, Switch, ListView });
addEnumerations({
  "AgentCommons.MCP_ToolType": [
    [
      "Server",
      selectTranslation([
        "Server"
      ])
    ],
    [
      "Tool",
      selectTranslation([
        "Tool"
      ])
    ]
  ]
});
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.AgentCommons.MCPView_New.layoutGrid1",
      $widgetId: "p.AgentCommons.MCPView_New.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AgentCommons.MCPView_New.layoutGrid1$row0",
            $widgetId: "p.AgentCommons.MCPView_New.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AgentCommons.MCPView_New.layoutGrid1$row0$column0",
                  $widgetId: "p.AgentCommons.MCPView_New.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.AgentCommons.MCPView_New.dataView6",
                        $widgetId: "p.AgentCommons.MCPView_New.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.26",
                          "scope": "$MCPView",
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
                              key: "p.AgentCommons.MCPView_New.container3",
                              $widgetId: "p.AgentCommons.MCPView_New.container3",
                              class: "mx-name-container3",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.MCPView_New.container39",
                                    $widgetId: "p.AgentCommons.MCPView_New.container39",
                                    class: "mx-name-container39 row-left",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.AgentCommons.MCPView_New.text3",
                                          $widgetId: "p.AgentCommons.MCPView_New.text3",
                                          class: "mx-name-text3 custom-control-label",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "MCP server configuration*" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.AgentCommons.MCPView_New.container44",
                                          $widgetId: "p.AgentCommons.MCPView_New.container44",
                                          class: "mx-name-container44 icon-info-wrapper",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Tooltip,
                                              {
                                                key: "p.AgentCommons.MCPView_New.tooltip3",
                                                $widgetId: "p.AgentCommons.MCPView_New.tooltip3",
                                                trigger: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AgentCommons.MCPView_New.actionButton22$visibility",
                                                      $widgetId: "p.AgentCommons.MCPView_New.actionButton22$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.AgentCommons.MCPView_New.actionButton22",
                                                            $widgetId: "p.AgentCommons.MCPView_New.actionButton22",
                                                            buttonId: "p.AgentCommons.MCPView_New.actionButton22",
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
                                                      key: "p.AgentCommons.MCPView_New.container103",
                                                      $widgetId: "p.AgentCommons.MCPView_New.container103",
                                                      class: "mx-name-container103 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.AgentCommons.MCPView_New.text45",
                                                            $widgetId: "p.AgentCommons.MCPView_New.text45",
                                                            class: "mx-name-text45 text-normal text-break text-small",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Select a configuration for the MCP server so the agent can use its exposed tools." }, "args": {} }
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
                                  $FormGroup,
                                  {
                                    key: "p.AgentCommons.MCPView_New.comboBox2$formGroup",
                                    $widgetId: "p.AgentCommons.MCPView_New.comboBox2$formGroup",
                                    class: "mx-name-comboBox2 combobox-model-selection combobox-selection-height-small",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Combobox,
                                        {
                                          key: "p.AgentCommons.MCPView_New.comboBox2",
                                          $widgetId: "p.AgentCommons.MCPView_New.comboBox2",
                                          source: "context",
                                          optionsSourceType: "association",
                                          optionsSourceDatabaseDataSource: void 0,
                                          optionsSourceAssociationCaptionType: "attribute",
                                          optionsSourceDatabaseCaptionType: "attribute",
                                          optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                            "path": "",
                                            "entity": "MCPClient.MCPServerConfiguration",
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
                                            "entity": "AgentCommons.MCPView",
                                            "path": "",
                                            "attribute": "AgentCommons.MCPView_MCPServerConfiguration",
                                            "endpointEntity": "MCPClient.MCPServerConfiguration",
                                            "selectableObjectsId": "p.2",
                                            "scope": "p.AgentCommons.MCPView_New.dataView6",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                          }),
                                          optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                            "dataSourceId": "p.2",
                                            "entity": "MCPClient.MCPServerConfiguration",
                                            "scope": "p.AgentCommons.MCPView_New.dataView6",
                                            "operationId": "IVsgiWps0lS9412lhyRlXg",
                                            "sort": [
                                              [
                                                "Name",
                                                "asc"
                                              ]
                                            ]
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
                                                  key: "p.AgentCommons.MCPView_New.container23",
                                                  $widgetId: "p.AgentCommons.MCPView_New.container23",
                                                  class: "mx-name-container23 model-selection",
                                                  style: void 0,
                                                  renderMode: "div",
                                                  onClick: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Image,
                                                      {
                                                        key: "p.AgentCommons.MCPView_New.image1",
                                                        $widgetId: "p.AgentCommons.MCPView_New.image1",
                                                        datasource: "image",
                                                        imageObject: WebStaticImageProperty({
                                                          "image": { "uri": "img/AgentCommons$Images_AgentBuilder$MCP_black.svg" }
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
                                                        class: "mx-name-image1",
                                                        style: void 0,
                                                        tabIndex: void 0
                                                      }
                                                    ),
                                                    /* @__PURE__ */ React.createElement(
                                                      $Text,
                                                      {
                                                        key: "p.AgentCommons.MCPView_New.text9",
                                                        $widgetId: "p.AgentCommons.MCPView_New.text9",
                                                        class: "mx-name-text9",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.comboBox2", "source": "object" } } }
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
                                          onChangeEvent: ActionProperty({
                                            "action": { "type": "callMicroflow", "argMap": { "MCPView": { "widget": "$MCPView", "source": "object" }, "Version": { "widget": "$Version", "source": "object" } }, "config": { "operationId": "W4JaSEYM7lWl16p6X1T09w", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
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
                                            "widgetId": "p.AgentCommons.MCPView_New.comboBox2"
                                          })
                                        }
                                      )
                                    ],
                                    caption: void 0,
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.AgentCommons.MCPView_New.comboBox2"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.AgentCommons.MCPView_New.comboBox2"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.AgentCommons.MCPView_New.container7$visibility",
                                    $widgetId: "p.AgentCommons.MCPView_New.container7$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "isNew", "parameters": [{ "type": "variable", "variable": "currentObject" }] }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.dataView6", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.AgentCommons.MCPView_New.container7",
                                          $widgetId: "p.AgentCommons.MCPView_New.container7",
                                          class: "mx-name-container7 spacing-outer-top-none spacing-inner-top",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.AgentCommons.MCPView_New.container40",
                                                $widgetId: "p.AgentCommons.MCPView_New.container40",
                                                class: "mx-name-container40 row-left",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.MCPView_New.text4",
                                                      $widgetId: "p.AgentCommons.MCPView_New.text4",
                                                      class: "mx-name-text4 custom-control-label",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Import type*" }, "args": {} }
                                                        })
                                                      ]),
                                                      renderMode: "span"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.AgentCommons.MCPView_New.container45",
                                                      $widgetId: "p.AgentCommons.MCPView_New.container45",
                                                      class: "mx-name-container45 icon-info-wrapper",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Tooltip,
                                                          {
                                                            key: "p.AgentCommons.MCPView_New.tooltip4",
                                                            $widgetId: "p.AgentCommons.MCPView_New.tooltip4",
                                                            trigger: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.AgentCommons.MCPView_New.actionButton23$visibility",
                                                                  $widgetId: "p.AgentCommons.MCPView_New.actionButton23$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ActionButton,
                                                                      {
                                                                        key: "p.AgentCommons.MCPView_New.actionButton23",
                                                                        $widgetId: "p.AgentCommons.MCPView_New.actionButton23",
                                                                        buttonId: "p.AgentCommons.MCPView_New.actionButton23",
                                                                        class: "mx-name-actionButton23 spacing-outer-left spacing-outer-right",
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
                                                                  key: "p.AgentCommons.MCPView_New.container104",
                                                                  $widgetId: "p.AgentCommons.MCPView_New.container104",
                                                                  class: "mx-name-container104 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Text,
                                                                      {
                                                                        key: "p.AgentCommons.MCPView_New.text46",
                                                                        $widgetId: "p.AgentCommons.MCPView_New.text46",
                                                                        class: "mx-name-text46 text-normal text-break text-small",
                                                                        style: void 0,
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": `Select how you would like to import this server's tools. You can either add all the tools of this server by selecting "Server" or you can add individual tools in this server by selecting "Tool".` }, "args": {} }
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
                                                            class: "mx-name-tooltip4 agent-tooltip",
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
                                              $Container,
                                              {
                                                key: "p.AgentCommons.MCPView_New.container10",
                                                $widgetId: "p.AgentCommons.MCPView_New.container10",
                                                class: "mx-name-container10 segmented-control",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AgentCommons.MCPView_New.actionButton7$visibility",
                                                      $widgetId: "p.AgentCommons.MCPView_New.actionButton7$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ToolType" }, { "type": "literal", "value": "Server" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.dataView6", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.AgentCommons.MCPView_New.actionButton7",
                                                            $widgetId: "p.AgentCommons.MCPView_New.actionButton7",
                                                            buttonId: "p.AgentCommons.MCPView_New.actionButton7",
                                                            class: "mx-name-actionButton7",
                                                            style: void 0,
                                                            tabIndex: void 0,
                                                            renderType: "button",
                                                            role: void 0,
                                                            buttonClass: "btn-primary",
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Server" }, "args": {} }
                                                              })
                                                            ]),
                                                            tooltip: TextProperty({
                                                              "value": selectTranslation([
                                                                ""
                                                              ])
                                                            }),
                                                            icon: void 0,
                                                            action: ActionProperty({
                                                              "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                              "abortOnServerValidation": true
                                                            })
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AgentCommons.MCPView_New.actionButton6$visibility",
                                                      $widgetId: "p.AgentCommons.MCPView_New.actionButton6$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ToolType" }, { "type": "literal", "value": "Tool" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ToolType" }, { "type": "literal", "value": null }] } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.dataView6", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.AgentCommons.MCPView_New.actionButton6",
                                                            $widgetId: "p.AgentCommons.MCPView_New.actionButton6",
                                                            buttonId: "p.AgentCommons.MCPView_New.actionButton6",
                                                            class: DynamicClassProperty({
                                                              "staticClasses": "mx-name-actionButton6",
                                                              "dynamicClasses": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ToolType" }, { "type": "literal", "value": null }] }, "then": { "type": "literal", "value": "border-right" }, "else": { "type": "literal", "value": "" } }, "args": { "currentObject": { "widget": "$MCPView", "source": "object" } } }
                                                            }),
                                                            style: void 0,
                                                            tabIndex: void 0,
                                                            renderType: "button",
                                                            role: void 0,
                                                            buttonClass: "btn-default",
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Server" }, "args": {} }
                                                              })
                                                            ]),
                                                            tooltip: TextProperty({
                                                              "value": selectTranslation([
                                                                ""
                                                              ])
                                                            }),
                                                            icon: void 0,
                                                            action: ActionProperty({
                                                              "action": { "type": "callMicroflow", "argMap": { "MCPView": { "widget": "$MCPView", "source": "object" } }, "config": { "operationId": "rCSJMZneZ1KImyX7wuZOjg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                              "abortOnServerValidation": true
                                                            })
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AgentCommons.MCPView_New.actionButton8$visibility",
                                                      $widgetId: "p.AgentCommons.MCPView_New.actionButton8$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ToolType" }, { "type": "literal", "value": "Server" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ToolType" }, { "type": "literal", "value": null }] } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.dataView6", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.AgentCommons.MCPView_New.actionButton8",
                                                            $widgetId: "p.AgentCommons.MCPView_New.actionButton8",
                                                            buttonId: "p.AgentCommons.MCPView_New.actionButton8",
                                                            class: "mx-name-actionButton8",
                                                            style: void 0,
                                                            tabIndex: void 0,
                                                            renderType: "button",
                                                            role: void 0,
                                                            buttonClass: "btn-default",
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Tool" }, "args": {} }
                                                              })
                                                            ]),
                                                            tooltip: TextProperty({
                                                              "value": selectTranslation([
                                                                ""
                                                              ])
                                                            }),
                                                            icon: void 0,
                                                            action: ActionProperty({
                                                              "action": { "type": "callMicroflow", "argMap": { "MCPView": { "widget": "$MCPView", "source": "object" } }, "config": { "operationId": "MjX9PnUbrViIitb9Kfk93Q", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                              "abortOnServerValidation": true
                                                            })
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AgentCommons.MCPView_New.actionButton9$visibility",
                                                      $widgetId: "p.AgentCommons.MCPView_New.actionButton9$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ToolType" }, { "type": "literal", "value": "Tool" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.dataView6", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.AgentCommons.MCPView_New.actionButton9",
                                                            $widgetId: "p.AgentCommons.MCPView_New.actionButton9",
                                                            buttonId: "p.AgentCommons.MCPView_New.actionButton9",
                                                            class: "mx-name-actionButton9",
                                                            style: void 0,
                                                            tabIndex: void 0,
                                                            renderType: "button",
                                                            role: void 0,
                                                            buttonClass: "btn-primary",
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Tool" }, "args": {} }
                                                              })
                                                            ]),
                                                            tooltip: TextProperty({
                                                              "value": selectTranslation([
                                                                ""
                                                              ])
                                                            }),
                                                            icon: void 0,
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
                                                ariaHidden: false
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p.AgentCommons.MCPView_New.comboBox1$formGroup",
                                                $widgetId: "p.AgentCommons.MCPView_New.comboBox1$formGroup",
                                                class: "mx-name-comboBox1 combobox-hidden-with-validation",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Combobox,
                                                    {
                                                      key: "p.AgentCommons.MCPView_New.comboBox1",
                                                      $widgetId: "p.AgentCommons.MCPView_New.comboBox1",
                                                      source: "context",
                                                      optionsSourceType: "enumeration",
                                                      attributeEnumeration: AttributeProperty({
                                                        "scope": "p.AgentCommons.MCPView_New.dataView6",
                                                        "path": "",
                                                        "entity": "AgentCommons.MCPView",
                                                        "attribute": "ToolType",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                        "isList": false
                                                      }),
                                                      optionsSourceDatabaseDataSource: void 0,
                                                      optionsSourceAssociationCaptionType: "attribute",
                                                      optionsSourceDatabaseCaptionType: "attribute",
                                                      optionsSourceDatabaseDefaultValue: void 0,
                                                      optionsSourceAssociationDataSource: void 0,
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
                                                      optionsSourceAssociationCustomContentType: "no",
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
                                                        "widgetId": "p.AgentCommons.MCPView_New.comboBox1"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: void 0,
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.AgentCommons.MCPView_New.comboBox1"
                                                }),
                                                width: void 0,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.AgentCommons.MCPView_New.comboBox1"
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
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.AgentCommons.MCPView_New.container6$visibility",
                                    $widgetId: "p.AgentCommons.MCPView_New.container6$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "isNew", "parameters": [{ "type": "variable", "variable": "currentObject" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ToolType" }, { "type": "literal", "value": "Tool" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.dataView6", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.AgentCommons.MCPView_New.container6",
                                          $widgetId: "p.AgentCommons.MCPView_New.container6",
                                          class: "mx-name-container6 spacing-outer-top-none spacing-inner-top",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.AgentCommons.MCPView_New.container2",
                                                $widgetId: "p.AgentCommons.MCPView_New.container2",
                                                class: "mx-name-container2 spacing-outer-bottom",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Div,
                                                    {
                                                      key: "p.AgentCommons.MCPView_New.layoutGrid2",
                                                      $widgetId: "p.AgentCommons.MCPView_New.layoutGrid2",
                                                      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                      style: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Div,
                                                          {
                                                            key: "p.AgentCommons.MCPView_New.layoutGrid2$row0",
                                                            $widgetId: "p.AgentCommons.MCPView_New.layoutGrid2$row0",
                                                            class: "row align-children-center",
                                                            style: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Div,
                                                                {
                                                                  key: "p.AgentCommons.MCPView_New.layoutGrid2$row0$column0",
                                                                  $widgetId: "p.AgentCommons.MCPView_New.layoutGrid2$row0$column0",
                                                                  class: "col-lg col-md col",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.AgentCommons.MCPView_New.container12",
                                                                        $widgetId: "p.AgentCommons.MCPView_New.container12",
                                                                        class: "mx-name-container12 row-left",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.AgentCommons.MCPView_New.text8",
                                                                              $widgetId: "p.AgentCommons.MCPView_New.text8",
                                                                              class: "mx-name-text8 custom-control-label spacing-outer-bottom-none",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Tools" }, "args": {} }
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
                                                                $Div,
                                                                {
                                                                  key: "p.AgentCommons.MCPView_New.layoutGrid2$row0$column1",
                                                                  $widgetId: "p.AgentCommons.MCPView_New.layoutGrid2$row0$column1",
                                                                  class: "col-lg col-md col",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.AgentCommons.MCPView_New.container13",
                                                                        $widgetId: "p.AgentCommons.MCPView_New.container13",
                                                                        class: "mx-name-container13 padding-right-4 row-right pull-right",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.AgentCommons.MCPView_New.text10",
                                                                              $widgetId: "p.AgentCommons.MCPView_New.text10",
                                                                              class: "mx-name-text10 spacing-inner-right",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "conditional", "condition": { "type": "variable", "variable": "currentObject", "path": "EnableAll" }, "then": { "type": "literal", "value": "Disable all" }, "else": { "type": "literal", "value": "Enable all" } }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.dataView6", "source": "object" } } }
                                                                                })
                                                                              ]),
                                                                              renderMode: "span"
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $FormGroup,
                                                                            {
                                                                              key: "p.AgentCommons.MCPView_New.switch5$formGroup",
                                                                              $widgetId: "p.AgentCommons.MCPView_New.switch5$formGroup",
                                                                              class: "mx-name-switch5 switch spacing-outer-bottom-none",
                                                                              style: void 0,
                                                                              control: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Switch,
                                                                                  {
                                                                                    key: "p.AgentCommons.MCPView_New.switch5",
                                                                                    $widgetId: "p.AgentCommons.MCPView_New.switch5",
                                                                                    booleanAttribute: AttributeProperty({
                                                                                      "scope": "p.AgentCommons.MCPView_New.dataView6",
                                                                                      "path": "",
                                                                                      "entity": "AgentCommons.MCPView",
                                                                                      "attribute": "EnableAll",
                                                                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                      "isList": false
                                                                                    }),
                                                                                    action: ActionProperty({
                                                                                      "action": { "type": "callMicroflow", "argMap": { "MCPView": { "widget": "$MCPView", "source": "object" } }, "config": { "operationId": "e78SXKsaAFKuytqIuohRqg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                                      "argumentTypes": {}
                                                                                    }),
                                                                                    tabIndex: void 0,
                                                                                    id: DerivedUniqueIdProperty({
                                                                                      "widgetId": "p.AgentCommons.MCPView_New.switch5"
                                                                                    })
                                                                                  }
                                                                                )
                                                                              ],
                                                                              caption: void 0,
                                                                              labelFor: DerivedUniqueIdProperty({
                                                                                "widgetId": "p.AgentCommons.MCPView_New.switch5"
                                                                              }),
                                                                              width: void 0,
                                                                              orientation: "vertical",
                                                                              hasError: ValidationProperty({
                                                                                "inputWidgetId": "p.AgentCommons.MCPView_New.switch5"
                                                                              })
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
                                                ],
                                                ariaHidden: false
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $ListView,
                                              {
                                                key: "p.AgentCommons.MCPView_New.listView2",
                                                $widgetId: "p.AgentCommons.MCPView_New.listView2",
                                                class: "mx-name-listView2 listview-empty-text listview-empty-text--mcp-tools listview-stylingless",
                                                style: void 0,
                                                listValue: AssociationObjectListProperty({
                                                  "dataSourceId": "p.13",
                                                  "entity": "AgentCommons.SingleMCPToolView",
                                                  "scope": "p.AgentCommons.MCPView_New.dataView6",
                                                  "operationId": "9R4tL3/9CFmfNAdguAQHnA"
                                                }),
                                                itemTemplate: TemplatedWidgetProperty({
                                                  "dataSourceId": "p.13",
                                                  "editable": true,
                                                  "children": () => [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Container,
                                                      {
                                                        key: "p.AgentCommons.MCPView_New.container36",
                                                        $widgetId: "p.AgentCommons.MCPView_New.container36",
                                                        class: DynamicClassProperty({
                                                          "staticClasses": "mx-name-container36",
                                                          "dynamicClasses": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "IsEnabled" }, { "type": "literal", "value": true }] }, "then": { "type": "literal", "value": "list" }, "else": { "type": "literal", "value": "disabled list" } }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.listView2", "source": "object" } } }
                                                        }),
                                                        style: void 0,
                                                        renderMode: "div",
                                                        onClick: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Container,
                                                            {
                                                              key: "p.AgentCommons.MCPView_New.container37",
                                                              $widgetId: "p.AgentCommons.MCPView_New.container37",
                                                              class: "mx-name-container37 col-center",
                                                              style: void 0,
                                                              renderMode: "div",
                                                              onClick: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Image,
                                                                  {
                                                                    key: "p.AgentCommons.MCPView_New.image28",
                                                                    $widgetId: "p.AgentCommons.MCPView_New.image28",
                                                                    datasource: "image",
                                                                    imageObject: WebStaticImageProperty({
                                                                      "image": { "uri": "img/AgentCommons$Images_AgentBuilder$wrench_purple.svg" }
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
                                                                        "expression": { "expr": { "type": "literal", "value": "Enabled" }, "args": {} }
                                                                      })
                                                                    ]),
                                                                    widthUnit: "auto",
                                                                    width: 100,
                                                                    heightUnit: "auto",
                                                                    height: 100,
                                                                    iconSize: 14,
                                                                    displayAs: "fullImage",
                                                                    responsive: true,
                                                                    class: "mx-name-image28",
                                                                    style: void 0,
                                                                    tabIndex: void 0
                                                                  }
                                                                )
                                                              ],
                                                              ariaHidden: false
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Container,
                                                            {
                                                              key: "p.AgentCommons.MCPView_New.container38",
                                                              $widgetId: "p.AgentCommons.MCPView_New.container38",
                                                              class: "mx-name-container38 col-left",
                                                              style: void 0,
                                                              renderMode: "div",
                                                              onClick: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.AgentCommons.MCPView_New.text7",
                                                                    $widgetId: "p.AgentCommons.MCPView_New.text7",
                                                                    class: "mx-name-text7",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.listView2", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "span"
                                                                  }
                                                                )
                                                              ],
                                                              ariaHidden: false
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Container,
                                                            {
                                                              key: "p.AgentCommons.MCPView_New.container9",
                                                              $widgetId: "p.AgentCommons.MCPView_New.container9",
                                                              class: "mx-name-container9 spacing-inner-left",
                                                              style: void 0,
                                                              renderMode: "div",
                                                              onClick: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Tooltip,
                                                                  {
                                                                    key: "p.AgentCommons.MCPView_New.tooltip11",
                                                                    $widgetId: "p.AgentCommons.MCPView_New.tooltip11",
                                                                    trigger: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Container,
                                                                        {
                                                                          key: "p.AgentCommons.MCPView_New.container41",
                                                                          $widgetId: "p.AgentCommons.MCPView_New.container41",
                                                                          class: "mx-name-container41 hover-btn spacing-outer-right spacing-outer-left",
                                                                          style: void 0,
                                                                          tabIndex: void 0,
                                                                          renderMode: "div",
                                                                          onClick: ActionProperty({
                                                                            "action": { "type": "callMicroflow", "argMap": { "SingleMCPToolView": { "widget": "p.AgentCommons.MCPView_New.listView2", "source": "object" }, "Version": { "widget": "$Version", "source": "object" } }, "config": { "operationId": "se0l96wu4FCfPPMoiejtjw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true }
                                                                          }),
                                                                          content: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $Image,
                                                                              {
                                                                                key: "p.AgentCommons.MCPView_New.image2",
                                                                                $widgetId: "p.AgentCommons.MCPView_New.image2",
                                                                                datasource: "image",
                                                                                imageObject: WebStaticImageProperty({
                                                                                  "image": { "uri": "img/AgentCommons$Images_AgentBuilder$pencil.svg" }
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
                                                                                    "expression": { "expr": { "type": "literal", "value": "Edit tool" }, "args": {} }
                                                                                  })
                                                                                ]),
                                                                                widthUnit: "pixels",
                                                                                width: 20,
                                                                                heightUnit: "pixels",
                                                                                height: 20,
                                                                                iconSize: 14,
                                                                                displayAs: "fullImage",
                                                                                responsive: true,
                                                                                class: "mx-name-image2",
                                                                                style: void 0,
                                                                                tabIndex: void 0
                                                                              }
                                                                            )
                                                                          ],
                                                                          ariaHidden: false
                                                                        }
                                                                      )
                                                                    ],
                                                                    renderMethod: "custom",
                                                                    htmlMessage: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Container,
                                                                        {
                                                                          key: "p.AgentCommons.MCPView_New.container112",
                                                                          $widgetId: "p.AgentCommons.MCPView_New.container112",
                                                                          class: "mx-name-container112",
                                                                          style: void 0,
                                                                          renderMode: "div",
                                                                          onClick: void 0,
                                                                          content: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $Text,
                                                                              {
                                                                                key: "p.AgentCommons.MCPView_New.text61",
                                                                                $widgetId: "p.AgentCommons.MCPView_New.text61",
                                                                                class: "mx-name-text61 text-normal text-break text-small",
                                                                                style: void 0,
                                                                                caption: selectTranslation([
                                                                                  ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "Edit tool\r\n" }, "args": {} }
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
                                                                    class: "mx-name-tooltip11 agent-tooltip",
                                                                    style: void 0,
                                                                    tabIndex: void 0
                                                                  }
                                                                )
                                                              ],
                                                              ariaHidden: false
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Container,
                                                            {
                                                              key: "p.AgentCommons.MCPView_New.container11",
                                                              $widgetId: "p.AgentCommons.MCPView_New.container11",
                                                              class: "mx-name-container11",
                                                              style: void 0,
                                                              renderMode: "div",
                                                              onClick: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $FormGroup,
                                                                  {
                                                                    key: "p.AgentCommons.MCPView_New.switch2$formGroup",
                                                                    $widgetId: "p.AgentCommons.MCPView_New.switch2$formGroup",
                                                                    class: "mx-name-switch2 switch spacing-outer-bottom-none",
                                                                    style: void 0,
                                                                    control: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Switch,
                                                                        {
                                                                          key: "p.AgentCommons.MCPView_New.switch2",
                                                                          $widgetId: "p.AgentCommons.MCPView_New.switch2",
                                                                          booleanAttribute: AttributeProperty({
                                                                            "scope": "p.AgentCommons.MCPView_New.listView2",
                                                                            "path": "",
                                                                            "entity": "AgentCommons.SingleMCPToolView",
                                                                            "attribute": "IsEnabled",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false
                                                                          }),
                                                                          action: ActionProperty({
                                                                            "action": { "type": "callMicroflow", "argMap": { "MCPView": { "widget": "$MCPView", "source": "object" } }, "config": { "operationId": "fJfjGZU0MleWUa/dB2CMvg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                            "argumentTypes": {}
                                                                          }),
                                                                          tabIndex: void 0,
                                                                          id: DerivedUniqueIdProperty({
                                                                            "widgetId": "p.AgentCommons.MCPView_New.switch2"
                                                                          })
                                                                        }
                                                                      )
                                                                    ],
                                                                    caption: void 0,
                                                                    labelFor: DerivedUniqueIdProperty({
                                                                      "widgetId": "p.AgentCommons.MCPView_New.switch2"
                                                                    }),
                                                                    width: void 0,
                                                                    orientation: "vertical",
                                                                    hasError: ValidationProperty({
                                                                      "inputWidgetId": "p.AgentCommons.MCPView_New.switch2"
                                                                    })
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
                                                }),
                                                onClick: void 0,
                                                pageSize: 0
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
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.MCPView_New.container5",
                              $widgetId: "p.AgentCommons.MCPView_New.container5",
                              class: "mx-name-container5",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.MCPView_New.container1",
                                    $widgetId: "p.AgentCommons.MCPView_New.container1",
                                    class: "mx-name-container1 row-right",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.AgentCommons.MCPView_New.actionButton2",
                                          $widgetId: "p.AgentCommons.MCPView_New.actionButton2",
                                          buttonId: "p.AgentCommons.MCPView_New.actionButton2",
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "58RRZggiNFGaUbN10t7dgQ", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.AgentCommons.MCPView_New.actionButton1$visibility",
                                          $widgetId: "p.AgentCommons.MCPView_New.actionButton1$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.AgentCommons.MCPView_New.actionButton1",
                                                $widgetId: "p.AgentCommons.MCPView_New.actionButton1",
                                                buttonId: "p.AgentCommons.MCPView_New.actionButton1",
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
                                                  "action": { "type": "callMicroflow", "argMap": { "MCPView": { "widget": "$MCPView", "source": "object" }, "Version": { "widget": "$Version", "source": "object" } }, "config": { "operationId": "xRLIbxIeZ1CPIF7aL3zudw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
  "Add MCP server"
]);
const classes = "";
const cancelChangesOperationId = "Q9UW4UV0JVKWOtj4clDZhw";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
