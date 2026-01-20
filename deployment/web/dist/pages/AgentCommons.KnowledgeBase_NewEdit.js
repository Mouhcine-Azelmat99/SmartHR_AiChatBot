import { reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-ALaVt2gM.js';
import { AssociationProperty } from '../AssociationProperty-BQ-xenUM.js';
import '../AttributeProperty-DLZOHEVl.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-Cmtbu3ww.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-Bivq5vCz.js';
import { ListAttributeProperty } from '../ListAttributeProperty-Dsd9EADd.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-V0FBuqFr.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { FormGroup, ValidationProperty } from '../FormGroup-Clh5YKWK.js';
import { WebIconProperty } from '../WebIconProperty-MLEi2sc0.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-C3LJYoNm.js';
import { ComboboxWidgetModule } from '../Combobox-kwA1_Kpz.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { Container } from '../Container-LyamVXag.js';
import { DataView } from '../DataView-BlzHzMI2.js';
import { Div } from '../Div-DznaFJxI.js';
import '../Fragment-C-45CGtT.js';
import { ImageWidgetModule } from '../Image-CNc12AI2.js';
import { SwitchWidgetModule } from '../Switch-D0MPC9Ll.js';
import { Text } from '../Text-mON8QAZM.js';
import { TextArea } from '../TextArea-CVgm5cpf.js';
import { TextBox } from '../TextBox-Fm7_ARBG.js';
import { TooltipWidgetModule } from '../Tooltip-Ca2Kf3P2.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-CdvE1MzX.js';
import { AttributeProperty } from '../CTQxk13g-Cpo2G8Em.js';
import '../CkBXggmw-DpOc9R4C.js';
import '../UeptbR6O-BTpvn_SV.js';
import '../uEIG9e6s-BfLfin4i.js';
import '../CxoxYXlg-DglkwELR.js';
import '../CTcC6PjV-DYXKqvux.js';
import '../bdxqAC6d-DXeZKQMd.js';
import '../index-BuuMIVCm.js';
import '../InlineText-D4EmJMFt.js';
import '../B6nacfjo-CjNcAaDz.js';
import '../B7_8A3ct-D5Y5qINW.js';
import '../F-L0MxFU-C_ISpEfs.js';
import '../ScrollContainer-U0HrQ4Hh.js';

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
      key: "p.AgentCommons.KnowledgeBase_NewEdit.layoutGrid1",
      $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AgentCommons.KnowledgeBase_NewEdit.layoutGrid1$row0",
            $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AgentCommons.KnowledgeBase_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.AgentCommons.KnowledgeBase_NewEdit.dataView6",
                        $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.25",
                          "scope": "$KnowledgeBase",
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
                              key: "p.AgentCommons.KnowledgeBase_NewEdit.container54",
                              $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.container54",
                              class: "mx-name-container54 row-left",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.KnowledgeBase_NewEdit.text8",
                                    $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.text8",
                                    class: "mx-name-text8 custom-control-label",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Knowledge base*" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.KnowledgeBase_NewEdit.container55",
                                    $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.container55",
                                    class: "mx-name-container55 icon-info-wrapper",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Tooltip,
                                        {
                                          key: "p.AgentCommons.KnowledgeBase_NewEdit.tooltip9",
                                          $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.tooltip9",
                                          trigger: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton28$visibility",
                                                $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton28$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton28",
                                                      $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton28",
                                                      buttonId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton28",
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
                                                key: "p.AgentCommons.KnowledgeBase_NewEdit.container109",
                                                $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.container109",
                                                class: "mx-name-container109 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.KnowledgeBase_NewEdit.text50",
                                                      $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.text50",
                                                      class: "mx-name-text50 text-normal text-break text-small",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "This is your your knowledge base. See nothing here? Make sure to configure the connection to your knowledge base(s) in this app first. Refer to the documentation of the connector of choice for configuration instructions. " }, "args": {} }
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
                              key: "p.AgentCommons.KnowledgeBase_NewEdit.comboBox2$formGroup",
                              $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.comboBox2$formGroup",
                              class: "mx-name-comboBox2 combobox-model-selection combobox-selection-height-small",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p.AgentCommons.KnowledgeBase_NewEdit.comboBox2",
                                    $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.comboBox2",
                                    source: "context",
                                    optionsSourceType: "association",
                                    optionsSourceDatabaseDataSource: void 0,
                                    optionsSourceAssociationCaptionType: "attribute",
                                    optionsSourceDatabaseCaptionType: "attribute",
                                    optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                      "path": "",
                                      "entity": "GenAICommons.DeployedKnowledgeBase",
                                      "attribute": "DisplayName",
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
                                      "entity": "AgentCommons.KnowledgeBase",
                                      "path": "",
                                      "attribute": "AgentCommons.KnowledgeBase_DeployedKnowledgeBase",
                                      "endpointEntity": "GenAICommons.DeployedKnowledgeBase",
                                      "selectableObjectsId": "p.2",
                                      "scope": "p.AgentCommons.KnowledgeBase_NewEdit.dataView6",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p.2",
                                      "entity": "GenAICommons.DeployedKnowledgeBase",
                                      "scope": "p.AgentCommons.KnowledgeBase_NewEdit.dataView6",
                                      "operationId": "Zcu6etjVe1W6wOWDuUruDw",
                                      "sort": [
                                        [
                                          "Architecture",
                                          "asc"
                                        ],
                                        [
                                          "DisplayName",
                                          "asc"
                                        ]
                                      ],
                                      "constraints": { "type": "attribute", "attribute": "IsActive", "context": "GenAICommons.DeployedKnowledgeBase", "attributeType": "Boolean" }
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
                                            key: "p.AgentCommons.KnowledgeBase_NewEdit.container23",
                                            $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.container23",
                                            class: "mx-name-container23 model-selection",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Image,
                                                {
                                                  key: "p.AgentCommons.KnowledgeBase_NewEdit.image1",
                                                  $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.image1",
                                                  datasource: "image",
                                                  imageObject: WebStaticImageProperty({
                                                    "image": { "uri": "img/AgentCommons$Images_AgentBuilder$book_open_sparkle_disabled.svg" }
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
                                                  key: "p.AgentCommons.KnowledgeBase_NewEdit.text9",
                                                  $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.text9",
                                                  class: "mx-name-text9",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "DisplayName" }, "args": { "currentObject": { "widget": "p.AgentCommons.KnowledgeBase_NewEdit.comboBox2", "source": "object" } } }
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
                                    lazyLoading: true,
                                    loadingType: "spinner",
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.comboBox2"
                                    })
                                  }
                                )
                              ],
                              caption: void 0,
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.comboBox2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AgentCommons.KnowledgeBase_NewEdit.comboBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Fragment,
                            {
                              key: "p.AgentCommons.KnowledgeBase_NewEdit.snippetCall1",
                              $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.snippetCall1",
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.Snippet_KnowledgeBase_Enable.container8",
                                    $widgetId: "p.AgentCommons.Snippet_KnowledgeBase_Enable.container8",
                                    class: "mx-name-container8 col-left",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.AgentCommons.Snippet_KnowledgeBase_Enable.container48",
                                          $widgetId: "p.AgentCommons.Snippet_KnowledgeBase_Enable.container48",
                                          class: "mx-name-container48 row-left",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.AgentCommons.Snippet_KnowledgeBase_Enable.text6",
                                                $widgetId: "p.AgentCommons.Snippet_KnowledgeBase_Enable.text6",
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
                                                key: "p.AgentCommons.Snippet_KnowledgeBase_Enable.container49",
                                                $widgetId: "p.AgentCommons.Snippet_KnowledgeBase_Enable.container49",
                                                class: "mx-name-container49 icon-info-wrapper",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Tooltip,
                                                    {
                                                      key: "p.AgentCommons.Snippet_KnowledgeBase_Enable.tooltip7",
                                                      $widgetId: "p.AgentCommons.Snippet_KnowledgeBase_Enable.tooltip7",
                                                      trigger: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ConditionalVisibilityWrapper,
                                                          {
                                                            key: "p.AgentCommons.Snippet_KnowledgeBase_Enable.actionButton26$visibility",
                                                            $widgetId: "p.AgentCommons.Snippet_KnowledgeBase_Enable.actionButton26$visibility",
                                                            visible: ExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                            }),
                                                            contents: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $ActionButton,
                                                                {
                                                                  key: "p.AgentCommons.Snippet_KnowledgeBase_Enable.actionButton26",
                                                                  $widgetId: "p.AgentCommons.Snippet_KnowledgeBase_Enable.actionButton26",
                                                                  buttonId: "p.AgentCommons.Snippet_KnowledgeBase_Enable.actionButton26",
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
                                                            key: "p.AgentCommons.Snippet_KnowledgeBase_Enable.container107",
                                                            $widgetId: "p.AgentCommons.Snippet_KnowledgeBase_Enable.container107",
                                                            class: "mx-name-container107 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.AgentCommons.Snippet_KnowledgeBase_Enable.text48",
                                                                  $widgetId: "p.AgentCommons.Snippet_KnowledgeBase_Enable.text48",
                                                                  class: "mx-name-text48 text-normal text-break text-small",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "The LLM is only aware of enabled knowledge bases and, as such, cannot call disabled knowledge bases. This holds for this Agent Builder interface as well as the Agent being used in the app logic. Disabling a knowledge base can help during development to (temporarily) exclude a knowledge base. It prevents having to add it back from scratch when it is needed again later." }, "args": {} }
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
                                          key: "p.AgentCommons.Snippet_KnowledgeBase_Enable.switch1$formGroup",
                                          $widgetId: "p.AgentCommons.Snippet_KnowledgeBase_Enable.switch1$formGroup",
                                          class: "mx-name-switch1 switch",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $Switch,
                                              {
                                                key: "p.AgentCommons.Snippet_KnowledgeBase_Enable.switch1",
                                                $widgetId: "p.AgentCommons.Snippet_KnowledgeBase_Enable.switch1",
                                                booleanAttribute: AttributeProperty({
                                                  "scope": "$KnowledgeBase",
                                                  "path": "",
                                                  "entity": "AgentCommons.KnowledgeBase",
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
                                                  "widgetId": "p.AgentCommons.Snippet_KnowledgeBase_Enable.switch1"
                                                })
                                              }
                                            )
                                          ],
                                          caption: void 0,
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.Snippet_KnowledgeBase_Enable.switch1"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.Snippet_KnowledgeBase_Enable.switch1"
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
                              key: "p.AgentCommons.KnowledgeBase_NewEdit.container40",
                              $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.container40",
                              class: "mx-name-container40 row-left",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.KnowledgeBase_NewEdit.text4",
                                    $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.text4",
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
                                    key: "p.AgentCommons.KnowledgeBase_NewEdit.container45",
                                    $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.container45",
                                    class: "mx-name-container45 icon-info-wrapper",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Tooltip,
                                        {
                                          key: "p.AgentCommons.KnowledgeBase_NewEdit.tooltip5",
                                          $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.tooltip5",
                                          trigger: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton24$visibility",
                                                $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton24$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton24",
                                                      $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton24",
                                                      buttonId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton24",
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
                                                key: "p.AgentCommons.KnowledgeBase_NewEdit.container105",
                                                $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.container105",
                                                class: "mx-name-container105 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.KnowledgeBase_NewEdit.text46",
                                                      $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.text46",
                                                      class: "mx-name-text46 text-normal text-break text-small",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "This is the name of the knowledge base that is sent to the LLM: it can only contain alphanumeric characters.\r\nIt is used in combination with the description by the model to determine what retrieves are necessary when, for example GetTicketData." }, "args": {} }
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
                              key: "p.AgentCommons.KnowledgeBase_NewEdit.textBox1$formGroup",
                              $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.AgentCommons.KnowledgeBase_NewEdit.textBox1",
                                    $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.AgentCommons.KnowledgeBase_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "AgentCommons.KnowledgeBase",
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
                                      "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textBox1"
                                    })
                                  }
                                )
                              ],
                              caption: void 0,
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.KnowledgeBase_NewEdit.container43",
                              $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.container43",
                              class: "mx-name-container43 row-left",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.KnowledgeBase_NewEdit.text5",
                                    $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.text5",
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
                                    key: "p.AgentCommons.KnowledgeBase_NewEdit.container46",
                                    $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.container46",
                                    class: "mx-name-container46 icon-info-wrapper",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Tooltip,
                                        {
                                          key: "p.AgentCommons.KnowledgeBase_NewEdit.tooltip6",
                                          $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.tooltip6",
                                          trigger: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton25$visibility",
                                                $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton25$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton25",
                                                      $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton25",
                                                      buttonId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton25",
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
                                                key: "p.AgentCommons.KnowledgeBase_NewEdit.container106",
                                                $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.container106",
                                                class: "mx-name-container106 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.KnowledgeBase_NewEdit.text47",
                                                      $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.text47",
                                                      class: "mx-name-text47 text-normal text-break text-small",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "This is a description for the LLM that explains in human language what data is present in the knowledge base and how (or when) data should be retrieved in the context of the task.\r\nIt is used in combination with the name by the model to determine what retrieves are necessary when." }, "args": {} }
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
                              key: "p.AgentCommons.KnowledgeBase_NewEdit.textArea1$formGroup",
                              $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.textArea1$formGroup",
                              class: "mx-name-textArea1 mx-textarea",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextArea,
                                  {
                                    key: "p.AgentCommons.KnowledgeBase_NewEdit.textArea1",
                                    $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.textArea1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.AgentCommons.KnowledgeBase_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "AgentCommons.KnowledgeBase",
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
                                      "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textArea1"
                                    })
                                  }
                                )
                              ],
                              caption: void 0,
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textArea1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textArea1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.KnowledgeBase_NewEdit.container48",
                              $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.container48",
                              class: "mx-name-container48 row-left",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.KnowledgeBase_NewEdit.text6",
                                    $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.text6",
                                    class: "mx-name-text6 custom-control-label",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Maximum number of results" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.KnowledgeBase_NewEdit.container49",
                                    $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.container49",
                                    class: "mx-name-container49 icon-info-wrapper",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Tooltip,
                                        {
                                          key: "p.AgentCommons.KnowledgeBase_NewEdit.tooltip7",
                                          $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.tooltip7",
                                          trigger: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton26$visibility",
                                                $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton26$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton26",
                                                      $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton26",
                                                      buttonId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton26",
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
                                                key: "p.AgentCommons.KnowledgeBase_NewEdit.container107",
                                                $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.container107",
                                                class: "mx-name-container107 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.KnowledgeBase_NewEdit.text48",
                                                      $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.text48",
                                                      class: "mx-name-text48 text-normal text-break text-small",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "This is the highest number of data chunks that can be returned in a single retrieve.\r\nIf left empty, many records could be retrieved, so it's recommended to set this number (to e.g. 5), or set the minimum similarity in the next field, or to set both." }, "args": {} }
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
                              key: "p.AgentCommons.KnowledgeBase_NewEdit.textBox4$formGroup",
                              $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.textBox4$formGroup",
                              class: "mx-name-textBox4 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.AgentCommons.KnowledgeBase_NewEdit.textBox4",
                                    $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.textBox4",
                                    inputValue: AttributeProperty({
                                      "scope": "p.AgentCommons.KnowledgeBase_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "AgentCommons.KnowledgeBase",
                                      "attribute": "MaxNumberOfResults",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {
                                        "numberFormat": {
                                          "groupDigits": false
                                        }
                                      }
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
                                      "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textBox4"
                                    })
                                  }
                                )
                              ],
                              caption: void 0,
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textBox4"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textBox4"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.KnowledgeBase_NewEdit.container51",
                              $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.container51",
                              class: "mx-name-container51 row-left",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.KnowledgeBase_NewEdit.text7",
                                    $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.text7",
                                    class: "mx-name-text7 custom-control-label",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Minimum similarity" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.KnowledgeBase_NewEdit.container52",
                                    $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.container52",
                                    class: "mx-name-container52 icon-info-wrapper",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Tooltip,
                                        {
                                          key: "p.AgentCommons.KnowledgeBase_NewEdit.tooltip8",
                                          $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.tooltip8",
                                          trigger: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton27$visibility",
                                                $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton27$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton27",
                                                      $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton27",
                                                      buttonId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton27",
                                                      class: "mx-name-actionButton27 spacing-outer-left spacing-outer-right",
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
                                                key: "p.AgentCommons.KnowledgeBase_NewEdit.container108",
                                                $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.container108",
                                                class: "mx-name-container108 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.KnowledgeBase_NewEdit.text49",
                                                      $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.text49",
                                                      class: "mx-name-text49 text-normal text-break text-small",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "This is the cosine-similarity cut-off for retrievals; allowed values lie between 0 and 1. It can be used to only retrieve data chunks of high relevance. A high value (e.g. 0.8) is stricter than a low value (e.g. 0.2)." }, "args": {} }
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
                                          class: "mx-name-tooltip8 agent-tooltip",
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
                              key: "p.AgentCommons.KnowledgeBase_NewEdit.textBox5$formGroup",
                              $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.textBox5$formGroup",
                              class: "mx-name-textBox5 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.AgentCommons.KnowledgeBase_NewEdit.textBox5",
                                    $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.textBox5",
                                    inputValue: AttributeProperty({
                                      "scope": "p.AgentCommons.KnowledgeBase_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "AgentCommons.KnowledgeBase",
                                      "attribute": "MinimumSimilarity",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {
                                        "numberFormat": {
                                          "groupDigits": false,
                                          "decimalPrecision": 2
                                        }
                                      }
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
                                      "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textBox5"
                                    })
                                  }
                                )
                              ],
                              caption: void 0,
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textBox5"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textBox5"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.KnowledgeBase_NewEdit.container1",
                              $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.container1",
                              class: "mx-name-container1 row-right",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton3",
                                    $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton3",
                                    buttonId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton3",
                                    class: "mx-name-actionButton3 spacing-outer-right-medium",
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
                                      "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "jME2knmZrFCtsYhwZzW02Q", "closePage": true }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton1$visibility",
                                    $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton1$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton1",
                                          $widgetId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton1",
                                          buttonId: "p.AgentCommons.KnowledgeBase_NewEdit.actionButton1",
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
                                            "action": { "type": "callMicroflow", "argMap": { "KnowledgeBase": { "widget": "$KnowledgeBase", "source": "object" } }, "config": { "operationId": "mwE7s1l9NF+zM3A7eis63Q", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
  "Edit knowledge base"
]);
const classes = "";
const cancelChangesOperationId = "iC8nq2LQhlu1ykEmYjVU6g";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
