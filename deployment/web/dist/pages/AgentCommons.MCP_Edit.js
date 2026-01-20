import { reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-B-pQLZz2.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C1uYYDJ5.js';
import { ActionButton, ActionProperty } from '../ActionButton-C47bDiwH.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BrlLyOx6.js';
import { AssociationProperty } from '../AssociationProperty-Dro-5rqe.js';
import '../AttributeProperty-CBmdvzfK.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-Dk1DF3Sc.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-QeaM9GtQ.js';
import { ListAttributeProperty } from '../ListAttributeProperty-CJPrRUfN.js';
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
import '../Fragment-C3M8OT7J.js';
import { ImageWidgetModule } from '../Image-CwuIpbpH.js';
import { SwitchWidgetModule } from '../Switch-yXbnrYr8.js';
import { Text } from '../Text-5NmEA291.js';
import { TooltipWidgetModule } from '../Tooltip-BBhx9N9q.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-D5lHkh-a.js';
import { AttributeProperty } from '../CTQxk13g-BDTc581w.js';
import '../CkBXggmw-CEa7-Kz-.js';
import '../UeptbR6O-9Cnv5Sxb.js';
import '../uEIG9e6s-CoI72Q4o.js';
import '../CxoxYXlg-rXnL4f6K.js';
import '../CTcC6PjV-CLE6jBCq.js';
import '../bdxqAC6d-ISZWqfJE.js';
import '../index-CgEeXS6W.js';
import '../InlineText-CcVi-f0x.js';
import '../ScrollContainer-B-pXvHDA.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const Switch = Object.getOwnPropertyDescriptor(SwitchWidgetModule, "Switch")?.value || Object.getOwnPropertyDescriptor(SwitchWidgetModule, "default")?.value;
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;
const { $Div, $DataView, $Container, $Text, $Tooltip, $ConditionalVisibilityWrapper, $ActionButton, $FormGroup, $Combobox, $Image, $Fragment, $Switch } = asPluginWidgets({ Div, DataView, Container, Text, Tooltip, ConditionalVisibilityWrapper, ActionButton, FormGroup, Combobox, Image, Fragment, Switch });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.AgentCommons.MCP_Edit.layoutGrid1",
      $widgetId: "p.AgentCommons.MCP_Edit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AgentCommons.MCP_Edit.layoutGrid1$row0",
            $widgetId: "p.AgentCommons.MCP_Edit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AgentCommons.MCP_Edit.layoutGrid1$row0$column0",
                  $widgetId: "p.AgentCommons.MCP_Edit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.AgentCommons.MCP_Edit.dataView6",
                        $widgetId: "p.AgentCommons.MCP_Edit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.19",
                          "scope": "$MCP",
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
                              key: "p.AgentCommons.MCP_Edit.container3",
                              $widgetId: "p.AgentCommons.MCP_Edit.container3",
                              class: "mx-name-container3",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.MCP_Edit.container39",
                                    $widgetId: "p.AgentCommons.MCP_Edit.container39",
                                    class: "mx-name-container39 row-left",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.AgentCommons.MCP_Edit.text3",
                                          $widgetId: "p.AgentCommons.MCP_Edit.text3",
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
                                          key: "p.AgentCommons.MCP_Edit.container44",
                                          $widgetId: "p.AgentCommons.MCP_Edit.container44",
                                          class: "mx-name-container44 icon-info-wrapper",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Tooltip,
                                              {
                                                key: "p.AgentCommons.MCP_Edit.tooltip3",
                                                $widgetId: "p.AgentCommons.MCP_Edit.tooltip3",
                                                trigger: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AgentCommons.MCP_Edit.actionButton22$visibility",
                                                      $widgetId: "p.AgentCommons.MCP_Edit.actionButton22$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.AgentCommons.MCP_Edit.actionButton22",
                                                            $widgetId: "p.AgentCommons.MCP_Edit.actionButton22",
                                                            buttonId: "p.AgentCommons.MCP_Edit.actionButton22",
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
                                                      key: "p.AgentCommons.MCP_Edit.container103",
                                                      $widgetId: "p.AgentCommons.MCP_Edit.container103",
                                                      class: "mx-name-container103 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.AgentCommons.MCP_Edit.text45",
                                                            $widgetId: "p.AgentCommons.MCP_Edit.text45",
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
                                    key: "p.AgentCommons.MCP_Edit.comboBox2$formGroup",
                                    $widgetId: "p.AgentCommons.MCP_Edit.comboBox2$formGroup",
                                    class: "mx-name-comboBox2 combobox-model-selection combobox-selection-height-small",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Combobox,
                                        {
                                          key: "p.AgentCommons.MCP_Edit.comboBox2",
                                          $widgetId: "p.AgentCommons.MCP_Edit.comboBox2",
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
                                            "entity": "AgentCommons.MCP",
                                            "path": "",
                                            "attribute": "AgentCommons.MCP_MCPServerConfiguration",
                                            "endpointEntity": "MCPClient.MCPServerConfiguration",
                                            "selectableObjectsId": "p.2",
                                            "scope": "p.AgentCommons.MCP_Edit.dataView6",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                          }),
                                          optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                            "dataSourceId": "p.2",
                                            "entity": "MCPClient.MCPServerConfiguration",
                                            "scope": "p.AgentCommons.MCP_Edit.dataView6",
                                            "operationId": "0WbkmswbD1W11AIXouMFrQ",
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
                                                  key: "p.AgentCommons.MCP_Edit.container23",
                                                  $widgetId: "p.AgentCommons.MCP_Edit.container23",
                                                  class: "mx-name-container23 model-selection",
                                                  style: void 0,
                                                  renderMode: "div",
                                                  onClick: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Image,
                                                      {
                                                        key: "p.AgentCommons.MCP_Edit.image1",
                                                        $widgetId: "p.AgentCommons.MCP_Edit.image1",
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
                                                        key: "p.AgentCommons.MCP_Edit.text9",
                                                        $widgetId: "p.AgentCommons.MCP_Edit.text9",
                                                        class: "mx-name-text9",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.AgentCommons.MCP_Edit.comboBox2", "source": "object" } } }
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
                                            "widgetId": "p.AgentCommons.MCP_Edit.comboBox2"
                                          })
                                        }
                                      )
                                    ],
                                    caption: void 0,
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.AgentCommons.MCP_Edit.comboBox2"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.AgentCommons.MCP_Edit.comboBox2"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.MCP_Edit.container4",
                                    $widgetId: "p.AgentCommons.MCP_Edit.container4",
                                    class: "mx-name-container4",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Fragment,
                                        {
                                          key: "p.AgentCommons.MCP_Edit.snippetCall1",
                                          $widgetId: "p.AgentCommons.MCP_Edit.snippetCall1",
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
                                                              "scope": "$MCP",
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
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.MCP_Edit.container5",
                              $widgetId: "p.AgentCommons.MCP_Edit.container5",
                              class: "mx-name-container5",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.MCP_Edit.container2",
                                    $widgetId: "p.AgentCommons.MCP_Edit.container2",
                                    class: "mx-name-container2 pull-left",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.AgentCommons.MCP_Edit.actionButton18$visibility",
                                          $widgetId: "p.AgentCommons.MCP_Edit.actionButton18$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.AgentCommons.MCP_Edit.actionButton18",
                                                $widgetId: "p.AgentCommons.MCP_Edit.actionButton18",
                                                buttonId: "p.AgentCommons.MCP_Edit.actionButton18",
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
                                                  "action": { "type": "callMicroflow", "argMap": { "Tool": { "widget": "$MCP", "source": "object" } }, "config": { "operationId": "7ZdWmAvSvl2aSPXKla5uCw", "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure?"]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                    key: "p.AgentCommons.MCP_Edit.container1",
                                    $widgetId: "p.AgentCommons.MCP_Edit.container1",
                                    class: "mx-name-container1 row-right",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.AgentCommons.MCP_Edit.actionButton2",
                                          $widgetId: "p.AgentCommons.MCP_Edit.actionButton2",
                                          buttonId: "p.AgentCommons.MCP_Edit.actionButton2",
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "rfMEnSDoTV6k2Y60bJz7iA", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.AgentCommons.MCP_Edit.actionButton1$visibility",
                                          $widgetId: "p.AgentCommons.MCP_Edit.actionButton1$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.AgentCommons.MCP_Edit.actionButton1",
                                                $widgetId: "p.AgentCommons.MCP_Edit.actionButton1",
                                                buttonId: "p.AgentCommons.MCP_Edit.actionButton1",
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
                                                  "action": { "type": "callMicroflow", "argMap": { "Tool": { "widget": "$MCP", "source": "object" } }, "config": { "operationId": "yH+ZbH0WqlmmX9zdgAUCkw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
const cancelChangesOperationId = "DVMFzrX8klKelAgnRiLMZA";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
