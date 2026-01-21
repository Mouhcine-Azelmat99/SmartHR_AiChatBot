import { reactExports, asPluginWidgets, addEnumerations, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-iFOPmzlY.js';
import { AssociationProperty } from '../AssociationProperty-vuO-mMD-.js';
import '../AttributeProperty-DPm6A02S.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-DirRMZIL.js';
import { ListAttributeProperty } from '../ListAttributeProperty-dWq-nfHX.js';
import { MicroflowObjectListProperty } from '../MicroflowObjectListProperty-Bn_uSbc6.js';
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
import { Text } from '../Text-Ct6rfb-k.js';
import { TooltipWidgetModule } from '../Tooltip-wE3mB9aV.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-B5WEKHCX.js';
import { AttributeProperty } from '../CTQxk13g-CU8g3epp.js';
import '../CkBXggmw-D1iecObi.js';
import '../UeptbR6O-Dse5KB9T.js';
import '../uEIG9e6s-VBk3qU43.js';
import '../CxoxYXlg-BJ3P5g_E.js';
import '../CTcC6PjV-eX91G0mv.js';
import '../BMuJrVqQ-CWJgr9IB.js';
import '../CxMFexew-CFDhnrRu.js';
import '../bdxqAC6d-BooPaEdW.js';
import '../index-BP8nYpIk.js';
import '../InlineText-f914ePRH.js';
import '../ScrollContainer-DO1bE89X.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;
const { $Div, $DataView, $ConditionalVisibilityWrapper, $Container, $Text, $Tooltip, $ActionButton, $Image, $FormGroup, $Combobox } = asPluginWidgets({ Div, DataView, ConditionalVisibilityWrapper, Container, Text, Tooltip, ActionButton, Image, FormGroup, Combobox });
addEnumerations({
  "GenAICommons.ENUM_ToolChoice": [
    [
      "auto",
      selectTranslation([
        "Auto"
      ])
    ],
    [
      "none",
      selectTranslation([
        "None"
      ])
    ],
    [
      "any",
      selectTranslation([
        "Any"
      ])
    ],
    [
      "tool",
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
      key: "p.AgentCommons.Version_EditToolChoice.layoutGrid1",
      $widgetId: "p.AgentCommons.Version_EditToolChoice.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid spacing-inner-top-medium",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AgentCommons.Version_EditToolChoice.layoutGrid1$row0",
            $widgetId: "p.AgentCommons.Version_EditToolChoice.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AgentCommons.Version_EditToolChoice.layoutGrid1$row0$column0",
                  $widgetId: "p.AgentCommons.Version_EditToolChoice.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.AgentCommons.Version_EditToolChoice.dataView1",
                        $widgetId: "p.AgentCommons.Version_EditToolChoice.dataView1",
                        class: "mx-name-dataView1 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.17",
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
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.AgentCommons.Version_EditToolChoice.container41$visibility",
                              $widgetId: "p.AgentCommons.Version_EditToolChoice.container41$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsDraftVersion" }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_EditToolChoice.dataView1", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.Version_EditToolChoice.container41",
                                    $widgetId: "p.AgentCommons.Version_EditToolChoice.container41",
                                    class: "mx-name-container41",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.AgentCommons.Version_EditToolChoice.container49",
                                          $widgetId: "p.AgentCommons.Version_EditToolChoice.container49",
                                          class: "mx-name-container49 row-left",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.AgentCommons.Version_EditToolChoice.text9",
                                                $widgetId: "p.AgentCommons.Version_EditToolChoice.text9",
                                                class: "mx-name-text9 custom-control-label spacing-outer-right",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Tool choice" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "span"
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.AgentCommons.Version_EditToolChoice.container43",
                                                $widgetId: "p.AgentCommons.Version_EditToolChoice.container43",
                                                class: "mx-name-container43 icon-info-wrapper",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Tooltip,
                                                    {
                                                      key: "p.AgentCommons.Version_EditToolChoice.tooltip2",
                                                      $widgetId: "p.AgentCommons.Version_EditToolChoice.tooltip2",
                                                      trigger: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ConditionalVisibilityWrapper,
                                                          {
                                                            key: "p.AgentCommons.Version_EditToolChoice.actionButton21$visibility",
                                                            $widgetId: "p.AgentCommons.Version_EditToolChoice.actionButton21$visibility",
                                                            visible: ExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                            }),
                                                            contents: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $ActionButton,
                                                                {
                                                                  key: "p.AgentCommons.Version_EditToolChoice.actionButton21",
                                                                  $widgetId: "p.AgentCommons.Version_EditToolChoice.actionButton21",
                                                                  buttonId: "p.AgentCommons.Version_EditToolChoice.actionButton21",
                                                                  class: "mx-name-actionButton21 info-icon btn-sm spacing-outer-bottom-none",
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
                                                            key: "p.AgentCommons.Version_EditToolChoice.container102",
                                                            $widgetId: "p.AgentCommons.Version_EditToolChoice.container102",
                                                            class: "mx-name-container102 w306 spacing-inner-top spacing-inner-bottom spacing-inner-left spacing-inner-right",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.AgentCommons.Version_EditToolChoice.container57",
                                                                  $widgetId: "p.AgentCommons.Version_EditToolChoice.container57",
                                                                  class: "mx-name-container57",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Text,
                                                                      {
                                                                        key: "p.AgentCommons.Version_EditToolChoice.text57",
                                                                        $widgetId: "p.AgentCommons.Version_EditToolChoice.text57",
                                                                        class: "mx-name-text57 text-normal text-break text-small text-header",
                                                                        style: void 0,
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Control the behavior of the agent regarding tools used. Not all values are supported for all models & providers. Please refer to the documentation of your LLM provider for more information." }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        renderMode: "p"
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.AgentCommons.Version_EditToolChoice.container2",
                                                                        $widgetId: "p.AgentCommons.Version_EditToolChoice.container2",
                                                                        class: "mx-name-container2 row-left",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $ActionButton,
                                                                            {
                                                                              key: "p.AgentCommons.Version_EditToolChoice.actionButton5",
                                                                              $widgetId: "p.AgentCommons.Version_EditToolChoice.actionButton5",
                                                                              buttonId: "p.AgentCommons.Version_EditToolChoice.actionButton5",
                                                                              class: "mx-name-actionButton5 text-sm spacing-inner-left-none btn-sm",
                                                                              style: void 0,
                                                                              tabIndex: void 0,
                                                                              renderType: "link",
                                                                              role: "button",
                                                                              buttonClass: "btn-default",
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Read more about the options" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              tooltip: TextProperty({
                                                                                "value": selectTranslation([
                                                                                  ""
                                                                                ])
                                                                              }),
                                                                              icon: void 0,
                                                                              action: ActionProperty({
                                                                                "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/commons/#enum-toolchoice" }, "disabledDuringExecution": true },
                                                                                "abortOnServerValidation": true
                                                                              })
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Container,
                                                                            {
                                                                              key: "p.AgentCommons.Version_EditToolChoice.container58",
                                                                              $widgetId: "p.AgentCommons.Version_EditToolChoice.container58",
                                                                              class: "mx-name-container58",
                                                                              style: void 0,
                                                                              renderMode: "div",
                                                                              onClick: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Image,
                                                                                  {
                                                                                    key: "p.AgentCommons.Version_EditToolChoice.image3",
                                                                                    $widgetId: "p.AgentCommons.Version_EditToolChoice.image3",
                                                                                    datasource: "image",
                                                                                    imageObject: WebStaticImageProperty({
                                                                                      "image": { "uri": "img/AgentCommons$Images_AgentBuilder$link_attachments.svg" }
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
                                                                                    onClick: ActionProperty({
                                                                                      "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/commons/#enum-toolchoice" }, "disabledDuringExecution": false },
                                                                                      "argumentTypes": {}
                                                                                    }),
                                                                                    alternativeText: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    widthUnit: "pixels",
                                                                                    width: 14,
                                                                                    heightUnit: "auto",
                                                                                    height: 100,
                                                                                    iconSize: 14,
                                                                                    displayAs: "fullImage",
                                                                                    responsive: true,
                                                                                    class: "mx-name-image3 spacing-inner-left",
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
                                                                    )
                                                                  ],
                                                                  ariaHidden: false
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
                                                      class: "mx-name-tooltip2 agent-tooltip",
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
                                          key: "p.AgentCommons.Version_EditToolChoice.comboBox2$formGroup",
                                          $widgetId: "p.AgentCommons.Version_EditToolChoice.comboBox2$formGroup",
                                          class: "mx-name-comboBox2 width-full",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $Combobox,
                                              {
                                                key: "p.AgentCommons.Version_EditToolChoice.comboBox2",
                                                $widgetId: "p.AgentCommons.Version_EditToolChoice.comboBox2",
                                                source: "context",
                                                optionsSourceType: "enumeration",
                                                attributeEnumeration: AttributeProperty({
                                                  "scope": "p.AgentCommons.Version_EditToolChoice.dataView1",
                                                  "path": "",
                                                  "entity": "AgentCommons.Version",
                                                  "attribute": "ToolChoice",
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
                                                readOnlyStyle: "bordered",
                                                onChangeEvent: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": { "Version": { "widget": "$Version", "source": "object" } }, "config": { "operationId": "e+K6+4OKyFq9mRTwuQk75w", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
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
                                                  "widgetId": "p.AgentCommons.Version_EditToolChoice.comboBox2"
                                                })
                                              }
                                            )
                                          ],
                                          caption: void 0,
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.Version_EditToolChoice.comboBox2"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.Version_EditToolChoice.comboBox2"
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
                              key: "p.AgentCommons.Version_EditToolChoice.comboBox3$formGroup$visibility",
                              $widgetId: "p.AgentCommons.Version_EditToolChoice.comboBox3$formGroup$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ToolChoice" }, { "type": "literal", "value": "tool" }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_EditToolChoice.dataView1", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.AgentCommons.Version_EditToolChoice.comboBox3$formGroup",
                                    $widgetId: "p.AgentCommons.Version_EditToolChoice.comboBox3$formGroup",
                                    class: "mx-name-comboBox3",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Combobox,
                                        {
                                          key: "p.AgentCommons.Version_EditToolChoice.comboBox3",
                                          $widgetId: "p.AgentCommons.Version_EditToolChoice.comboBox3",
                                          source: "context",
                                          optionsSourceType: "association",
                                          optionsSourceDatabaseDataSource: void 0,
                                          optionsSourceAssociationCaptionType: "attribute",
                                          optionsSourceDatabaseCaptionType: "attribute",
                                          optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                            "path": "",
                                            "entity": "AgentCommons.Tool",
                                            "attribute": "Name",
                                            "attributeType": "String",
                                            "sortable": true,
                                            "filterable": true,
                                            "dataSourceId": "p.4",
                                            "isList": false
                                          }),
                                          optionsSourceAssociationCaptionExpression: void 0,
                                          optionsSourceDatabaseDefaultValue: void 0,
                                          attributeAssociation: AssociationProperty({
                                            "type": "Reference",
                                            "entity": "AgentCommons.Version",
                                            "path": "",
                                            "attribute": "AgentCommons.Version_ToolChoice",
                                            "endpointEntity": "AgentCommons.Tool",
                                            "selectableObjectsId": "p.4",
                                            "scope": "p.AgentCommons.Version_EditToolChoice.dataView1",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isEditable": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsDraftVersion" }, "args": { "currentObject": { "widget": "$Version", "source": "object" } } }
                                          }),
                                          optionsSourceAssociationDataSource: MicroflowObjectListProperty({
                                            "argMap": { "Version": { "widget": "$Version", "source": "object" } },
                                            "dataSourceId": "p.4",
                                            "entity": "AgentCommons.Tool",
                                            "scope": "p.AgentCommons.Version_EditToolChoice.dataView1",
                                            "operationId": "gFftL1LVAlqQ2fU5plMtig"
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
                                          optionsSourceAssociationCustomContentType: "no",
                                          optionsSourceAssociationCustomContent: void 0,
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
                                            "action": { "type": "callMicroflow", "argMap": { "Version": { "widget": "$Version", "source": "object" } }, "config": { "operationId": "e+K6+4OKyFq9mRTwuQk75w", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
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
                                            "widgetId": "p.AgentCommons.Version_EditToolChoice.comboBox3"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Tool" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.AgentCommons.Version_EditToolChoice.comboBox3"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.AgentCommons.Version_EditToolChoice.comboBox3"
                                    })
                                  }
                                )
                              ]
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.Version_EditToolChoice.container1",
                              $widgetId: "p.AgentCommons.Version_EditToolChoice.container1",
                              class: "mx-name-container1 row-right",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.AgentCommons.Version_EditToolChoice.actionButton2",
                                    $widgetId: "p.AgentCommons.Version_EditToolChoice.actionButton2",
                                    buttonId: "p.AgentCommons.Version_EditToolChoice.actionButton2",
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
                                      "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "lpvvhckpHlqxL+B12ABOhg", "closePage": true }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.AgentCommons.Version_EditToolChoice.actionButton1$visibility",
                                    $widgetId: "p.AgentCommons.Version_EditToolChoice.actionButton1$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.AgentCommons.Version_EditToolChoice.actionButton1",
                                          $widgetId: "p.AgentCommons.Version_EditToolChoice.actionButton1",
                                          buttonId: "p.AgentCommons.Version_EditToolChoice.actionButton1",
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
                                            "action": { "type": "callMicroflow", "argMap": { "Version": { "widget": "$Version", "source": "object" } }, "config": { "operationId": "9hEX9SpPDVak9WVrjTLfBQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
  "Edit tool choice"
]);
const classes = "overflow";
const cancelChangesOperationId = "JmpPSBBEH1ybmm6zZL6zWw";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
