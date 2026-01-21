import { reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-BEIxbT2n.js';
import { ListActionProperty } from '../ListActionProperty-CSktymVx.js';
import { ListAttributeProperty } from '../ListAttributeProperty-dWq-nfHX.js';
import { MicroflowObjectProperty } from '../MicroflowObjectProperty-D79UAin-.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-CgBaKmKA.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { WebIconProperty } from '../WebIconProperty-I8EGGvK6.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-B3bpPygB.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BilSZaU4.js';
import { Container } from '../Container-PSi6m2QL.js';
import { DatagridWidgetModule } from '../Datagrid-CPOmkQcC.js';
import { DataView } from '../DataView-RrZIPNzV.js';
import { Div } from '../Div-DnhZCXw4.js';
import '../Fragment-kXArd_1S.js';
import { ImageWidgetModule } from '../Image-Cid1Yr5n.js';
import { PopupMenuWidgetModule } from '../PopupMenu-DvZGcG8d.js';
import { Text } from '../Text-Ct6rfb-k.js';
import { TooltipWidgetModule } from '../Tooltip-wE3mB9aV.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-iCAKiLvO.js';
import '../UeptbR6O-Dse5KB9T.js';
import '../uEIG9e6s-VBk3qU43.js';
import '../CkBXggmw-D1iecObi.js';
import '../CTcC6PjV-eX91G0mv.js';
import '../CxoxYXlg-BJ3P5g_E.js';
import '../CTQxk13g-CU8g3epp.js';
import '../BMuJrVqQ-CWJgr9IB.js';
import '../index-BP8nYpIk.js';
import '../bdxqAC6d-BooPaEdW.js';
import '../InlineText-f914ePRH.js';
import '../ListExpressionProperty-Cd_aouEd.js';
import '../SidebarToggle-CDtAU1t8.js';
import '../D7vCi_Rn-CSXZhW_h.js';
import '../CGlz0zm4-D9CbusC5.js';
import '../ScrollContainer-DO1bE89X.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const PopupMenu = Object.getOwnPropertyDescriptor(PopupMenuWidgetModule, "PopupMenu")?.value || Object.getOwnPropertyDescriptor(PopupMenuWidgetModule, "default")?.value;
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;
const { $Fragment, $Container, $Text, $ConditionalVisibilityWrapper, $ActionButton, $Datagrid, $Tooltip, $Div, $DataView, $PopupMenu, $Image } = asPluginWidgets({ Fragment, Container, Text, ConditionalVisibilityWrapper, ActionButton, Datagrid, Tooltip, Div, DataView, PopupMenu, Image });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Fragment,
    {
      key: "p.AgentCommons.Agent_Overview.snippetCall1",
      $widgetId: "p.AgentCommons.Agent_Overview.snippetCall1",
      content: [
        /* @__PURE__ */ React.createElement(
          $Container,
          {
            key: "p.AgentCommons.Snippet_Agent_Overview.container1",
            $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container1",
            class: "mx-name-container1 agents-page-content-container",
            style: void 0,
            renderMode: "div",
            onClick: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Container,
                {
                  key: "p.AgentCommons.Snippet_Agent_Overview.container2",
                  $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container2",
                  class: "mx-name-container2 agents-container--overview card",
                  style: void 0,
                  renderMode: "div",
                  onClick: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.AgentCommons.Snippet_Agent_Overview.container3",
                        $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container3",
                        class: "mx-name-container3 pageheader-with-buttons",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.Snippet_Agent_Overview.container9",
                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container9",
                              class: "mx-name-container9",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.Snippet_Agent_Overview.text1",
                                    $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text1",
                                    class: "mx-name-text1 pageheader-title",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Agents" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "h1"
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.Snippet_Agent_Overview.container5",
                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container5",
                              class: "mx-name-container5 row-center",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.AgentCommons.Snippet_Agent_Overview.actionButton1$visibility",
                                    $widgetId: "p.AgentCommons.Snippet_Agent_Overview.actionButton1$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.AgentCommons.Snippet_Agent_Overview.actionButton1",
                                          $widgetId: "p.AgentCommons.Snippet_Agent_Overview.actionButton1",
                                          buttonId: "p.AgentCommons.Snippet_Agent_Overview.actionButton1",
                                          class: "mx-name-actionButton1 btn-without-border custom-img",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Import" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: WebIconProperty({
                                            "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$download_button.svg" }
                                          }),
                                          action: ActionProperty({
                                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "nrikDKoz0lu+mGyq0kpelg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                    key: "p.AgentCommons.Snippet_Agent_Overview.actionButton2$visibility",
                                    $widgetId: "p.AgentCommons.Snippet_Agent_Overview.actionButton2$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.AgentCommons.Snippet_Agent_Overview.actionButton2",
                                          $widgetId: "p.AgentCommons.Snippet_Agent_Overview.actionButton2",
                                          buttonId: "p.AgentCommons.Snippet_Agent_Overview.actionButton2",
                                          class: "mx-name-actionButton2 custom-img spacing-outer-left",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-primary",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "New Agent" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: WebIconProperty({
                                            "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$add_white.svg" }
                                          }),
                                          action: ActionProperty({
                                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "QHs9U0TkilGJSk9b95+Y7g", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Datagrid,
                      {
                        key: "p.AgentCommons.Snippet_Agent_Overview.dataGrid21",
                        $widgetId: "p.AgentCommons.Snippet_Agent_Overview.dataGrid21",
                        datasource: DatabaseObjectListProperty({
                          "dataSourceId": "p.4",
                          "entity": "AgentCommons.Agent",
                          "operationId": "dC2QAvc3PlycBljFY+or7A",
                          "sort": [
                            [
                              "createdDate",
                              "desc"
                            ]
                          ]
                        }),
                        refreshInterval: 0,
                        itemSelectionMethod: "checkbox",
                        itemSelectionMode: "clear",
                        showSelectAllToggle: true,
                        columns: [
                          {
                            "showContentAs": "customContent",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "AgentCommons.Agent",
                              "attribute": "Title",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.4",
                              "isList": false
                            }),
                            "content": TemplatedWidgetProperty({
                              "dataSourceId": "p.4",
                              "editable": false,
                              "children": () => [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.Snippet_Agent_Overview.container26",
                                    $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container26",
                                    class: "mx-name-container26",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.AgentCommons.Snippet_Agent_Overview.tooltip2$visibility",
                                          $widgetId: "p.AgentCommons.Snippet_Agent_Overview.tooltip2$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Description" }] }, { "type": "literal", "value": "" }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Tooltip,
                                              {
                                                key: "p.AgentCommons.Snippet_Agent_Overview.tooltip2",
                                                $widgetId: "p.AgentCommons.Snippet_Agent_Overview.tooltip2",
                                                trigger: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.Snippet_Agent_Overview.text10",
                                                      $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text10",
                                                      class: "mx-name-text10 text-clamp--2-lines text-break",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } } }
                                                        })
                                                      ]),
                                                      renderMode: "span"
                                                    }
                                                  )
                                                ],
                                                renderMethod: "custom",
                                                htmlMessage: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.AgentCommons.Snippet_Agent_Overview.container31",
                                                      $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container31",
                                                      class: "mx-name-container31 spacing-inner-right spacing-inner-left spacing-inner-bottom-medium spacing-inner-top-medium",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.AgentCommons.Snippet_Agent_Overview.text7",
                                                            $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text7",
                                                            class: "mx-name-text7 text-clamp--2-lines text-normal text-small text-left d-block",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": ">", "parameters": [{ "type": "function", "name": "length", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Description" }] }, { "type": "literalNumeric", "value": "200" }] }, "then": { "type": "function", "name": "substring", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Description" }, { "type": "literalNumeric", "value": "0" }, { "type": "literalNumeric", "value": "200" }] }, "else": { "type": "variable", "variable": "currentObject", "path": "Description" } }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } } }
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
                                                tooltipPosition: "right",
                                                arrowPosition: "end",
                                                openOn: "hoverFocus",
                                                class: "mx-name-tooltip2 agent-tooltip agent-tooltip-w330",
                                                style: void 0,
                                                tabIndex: void 0
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
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.AgentCommons.Snippet_Agent_Overview.text11$visibility",
                                    $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text11$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Description" }] }, { "type": "literal", "value": "" }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.AgentCommons.Snippet_Agent_Overview.text11",
                                          $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text11",
                                          class: "mx-name-text11 text-clamp--2-lines text-break",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } } }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }),
                            "dynamicText": selectTranslation([
                              void 0
                            ]),
                            "exportValue": selectTranslation([
                              void 0
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Title" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": void 0,
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": true,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "yes",
                            "allowEventPropagation": true,
                            "width": "autoFill",
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false
                          },
                          {
                            "showContentAs": "customContent",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "AgentCommons.Agent",
                              "attribute": "Title",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.4",
                              "isList": false
                            }),
                            "content": TemplatedWidgetProperty({
                              "dataSourceId": "p.4",
                              "editable": false,
                              "children": () => [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.Snippet_Agent_Overview.container4",
                                    $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container4",
                                    class: "mx-name-container4",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.AgentCommons.Snippet_Agent_Overview.tooltip1$visibility",
                                          $widgetId: "p.AgentCommons.Snippet_Agent_Overview.tooltip1$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Tooltip,
                                              {
                                                key: "p.AgentCommons.Snippet_Agent_Overview.tooltip1",
                                                $widgetId: "p.AgentCommons.Snippet_Agent_Overview.tooltip1",
                                                trigger: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.Snippet_Agent_Overview.text3",
                                                      $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text3",
                                                      class: "mx-name-text3",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse" }, { "type": "literal", "value": null }] }, "then": { "type": "literal", "value": "" }, "else": { "type": "conditional", "condition": { "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse/AgentCommons.Version/IsDraftVersion" }, "then": { "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse/AgentCommons.Version/Title" }, "else": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "v" }, { "type": "function", "name": "formatDecimal", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse/AgentCommons.Version/VersionNumber" }] }] } } }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } } }
                                                        })
                                                      ]),
                                                      renderMode: "span"
                                                    }
                                                  )
                                                ],
                                                renderMethod: "custom",
                                                htmlMessage: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Div,
                                                    {
                                                      key: "p.AgentCommons.Snippet_Agent_Overview.layoutGrid1",
                                                      $widgetId: "p.AgentCommons.Snippet_Agent_Overview.layoutGrid1",
                                                      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid spacing-inner-top-none spacing-inner-bottom-none spacing-inner-left-none spacing-inner-right-none",
                                                      style: {
                                                        "margin": "0"
                                                      },
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Div,
                                                          {
                                                            key: "p.AgentCommons.Agent_Overview.layoutGrid1$row0",
                                                            $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid1$row0",
                                                            class: "row no-gutters",
                                                            style: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Div,
                                                                {
                                                                  key: "p.AgentCommons.Agent_Overview.layoutGrid1$row0$column0",
                                                                  $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid1$row0$column0",
                                                                  class: "col-lg-4 col-md col",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.AgentCommons.Snippet_Agent_Overview.container27",
                                                                        $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container27",
                                                                        class: "mx-name-container27 spacing-outer-bottom",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.AgentCommons.Snippet_Agent_Overview.text32",
                                                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text32",
                                                                              class: "mx-name-text32 title-width text-semibold text-small spacing-outer-right spacing-outer-bottom",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Title" }, "args": {} }
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
                                                                  key: "p.AgentCommons.Agent_Overview.layoutGrid1$row0$column1",
                                                                  $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid1$row0$column1",
                                                                  class: "col-lg-8 col-md col",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.AgentCommons.Snippet_Agent_Overview.container6",
                                                                        $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container6",
                                                                        class: "mx-name-container6 spacing-outer-bottom",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.AgentCommons.Snippet_Agent_Overview.text20",
                                                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text20",
                                                                              class: "mx-name-text20 text-width text-normal text-small spacing-outer-bottom",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse" }, { "type": "literal", "value": null }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse/AgentCommons.Version/IsDraftVersion" }] }, "else": { "type": "literal", "value": false } }, "then": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "v" }, { "type": "function", "name": "formatDecimal", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse/AgentCommons.Version/VersionNumber" }] }] }, { "type": "literal", "value": " " }] }, "else": { "type": "literal", "value": "" } }, { "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse/AgentCommons.Version/Title" }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } } }
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
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Div,
                                                          {
                                                            key: "p.AgentCommons.Agent_Overview.layoutGrid1$row1",
                                                            $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid1$row1",
                                                            class: "row no-gutters",
                                                            style: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Div,
                                                                {
                                                                  key: "p.AgentCommons.Agent_Overview.layoutGrid1$row1$column0",
                                                                  $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid1$row1$column0",
                                                                  class: "col-lg-4 col-md col",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.AgentCommons.Snippet_Agent_Overview.container12",
                                                                        $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container12",
                                                                        class: "mx-name-container12 spacing-outer-bottom",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.AgentCommons.Snippet_Agent_Overview.text43",
                                                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text43",
                                                                              class: "mx-name-text43 title-width text-semibold text-small spacing-outer-right spacing-outer-bottom",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
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
                                                                  key: "p.AgentCommons.Agent_Overview.layoutGrid1$row1$column1",
                                                                  $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid1$row1$column1",
                                                                  class: "col-lg-8 col-md col",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.AgentCommons.Snippet_Agent_Overview.container13",
                                                                        $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container13",
                                                                        class: "mx-name-container13 spacing-outer-bottom",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.AgentCommons.Snippet_Agent_Overview.text17",
                                                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text17",
                                                                              class: "mx-name-text17 text-width text-normal text-small spacing-outer-bottom",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse/AgentCommons.Version/Description" }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } } }
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
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Div,
                                                          {
                                                            key: "p.AgentCommons.Agent_Overview.layoutGrid1$row2",
                                                            $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid1$row2",
                                                            class: "row no-gutters",
                                                            style: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Div,
                                                                {
                                                                  key: "p.AgentCommons.Agent_Overview.layoutGrid1$row2$column0",
                                                                  $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid1$row2$column0",
                                                                  class: "col-lg-4 col-md col",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.AgentCommons.Snippet_Agent_Overview.container14",
                                                                        $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container14",
                                                                        class: "mx-name-container14 spacing-outer-bottom",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.AgentCommons.Snippet_Agent_Overview.text44",
                                                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text44",
                                                                              class: "mx-name-text44 title-width text-semibold text-small spacing-outer-right spacing-outer-bottom",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Date" }, "args": {} }
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
                                                                  key: "p.AgentCommons.Agent_Overview.layoutGrid1$row2$column1",
                                                                  $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid1$row2$column1",
                                                                  class: "col-lg-8 col-md col",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.AgentCommons.Snippet_Agent_Overview.container15",
                                                                        $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container15",
                                                                        class: "mx-name-container15 spacing-outer-bottom",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.AgentCommons.Snippet_Agent_Overview.text15",
                                                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text15",
                                                                              class: "mx-name-text15 text-width text-normal text-small spacing-outer-bottom",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse/AgentCommons.Version/VersionChangedDate" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } } }
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
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Div,
                                                          {
                                                            key: "p.AgentCommons.Agent_Overview.layoutGrid1$row3",
                                                            $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid1$row3",
                                                            class: "row no-gutters",
                                                            style: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Div,
                                                                {
                                                                  key: "p.AgentCommons.Agent_Overview.layoutGrid1$row3$column0",
                                                                  $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid1$row3$column0",
                                                                  class: "col-lg-4 col-md col",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.AgentCommons.Snippet_Agent_Overview.container16",
                                                                        $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container16",
                                                                        class: "mx-name-container16 spacing-outer-bottom",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.AgentCommons.Snippet_Agent_Overview.text45",
                                                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text45",
                                                                              class: "mx-name-text45 title-width text-semibold text-small spacing-outer-right spacing-outer-bottom",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Owner" }, "args": {} }
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
                                                                  key: "p.AgentCommons.Agent_Overview.layoutGrid1$row3$column1",
                                                                  $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid1$row3$column1",
                                                                  class: "col-lg-8 col-md col",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.AgentCommons.Snippet_Agent_Overview.container17",
                                                                        $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container17",
                                                                        class: "mx-name-container17 spacing-outer-bottom",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.AgentCommons.Snippet_Agent_Overview.text27",
                                                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text27",
                                                                              class: "mx-name-text27 text-width text-normal text-small spacing-outer-bottom",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse/AgentCommons.Version/VersionOwner" }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } } }
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
                                                            ]
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ],
                                                textMessage: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                tooltipPosition: "right",
                                                arrowPosition: "end",
                                                openOn: "hoverFocus",
                                                class: "mx-name-tooltip1 agent-tooltip agent-tooltip-w330 spacing-inner-top-none spacing-inner-bottom-none",
                                                style: void 0,
                                                tabIndex: void 0
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.AgentCommons.Snippet_Agent_Overview.text5$visibility",
                                          $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text5$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.AgentCommons.Snippet_Agent_Overview.text5",
                                                $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text5",
                                                class: "mx-name-text5",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse" }, { "type": "literal", "value": null }] }, "then": { "type": "literal", "value": "" }, "else": { "type": "conditional", "condition": { "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse/AgentCommons.Version/IsDraftVersion" }, "then": { "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse/AgentCommons.Version/Title" }, "else": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "v" }, { "type": "function", "name": "formatDecimal", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse/AgentCommons.Version/VersionNumber" }] }] } } }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } } }
                                                  })
                                                ]),
                                                renderMode: "span"
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
                            "dynamicText": selectTranslation([
                              void 0
                            ]),
                            "exportValue": selectTranslation([
                              void 0
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "In use" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": void 0,
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": true,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "yes",
                            "allowEventPropagation": true,
                            "width": "autoFit",
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false
                          },
                          {
                            "showContentAs": "customContent",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "AgentCommons.Agent",
                              "attribute": "Title",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.4",
                              "isList": false
                            }),
                            "content": TemplatedWidgetProperty({
                              "dataSourceId": "p.4",
                              "editable": false,
                              "children": () => [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.Snippet_Agent_Overview.container18",
                                    $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container18",
                                    class: "mx-name-container18",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $DataView,
                                        {
                                          key: "p.AgentCommons.Snippet_Agent_Overview.dataView1",
                                          $widgetId: "p.AgentCommons.Snippet_Agent_Overview.dataView1",
                                          class: "mx-name-dataView1 form-vertical",
                                          style: void 0,
                                          tabIndex: void 0,
                                          object: MicroflowObjectProperty({
                                            "dataSourceId": "p.117",
                                            "scope": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21",
                                            "editable": true,
                                            "operationId": "fqWZr5vUc1yqjXgR2tC2zQ",
                                            "argMap": { "Agent": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } }
                                          }),
                                          emptyMessage: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          body: [
                                            /* @__PURE__ */ React.createElement(
                                              $Tooltip,
                                              {
                                                key: "p.AgentCommons.Snippet_Agent_Overview.tooltip3",
                                                $widgetId: "p.AgentCommons.Snippet_Agent_Overview.tooltip3",
                                                trigger: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AgentCommons.Snippet_Agent_Overview.text24$visibility",
                                                      $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text24$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.AgentCommons.Snippet_Agent_Overview.text24",
                                                            $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text24",
                                                            class: "mx-name-text24 spacing-outer-right",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "conditional", "condition": { "type": "variable", "variable": "currentObject", "path": "IsDraftVersion" }, "then": { "type": "variable", "variable": "currentObject", "path": "Title" }, "else": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "v" }, { "type": "function", "name": "formatDecimal", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "VersionNumber" }] }] } }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataView1", "source": "object" } } }
                                                              })
                                                            ]),
                                                            renderMode: "span"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ],
                                                renderMethod: "custom",
                                                htmlMessage: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Div,
                                                    {
                                                      key: "p.AgentCommons.Snippet_Agent_Overview.layoutGrid2",
                                                      $widgetId: "p.AgentCommons.Snippet_Agent_Overview.layoutGrid2",
                                                      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid spacing-inner-top-none spacing-inner-bottom-none spacing-inner-left-none spacing-inner-right-none",
                                                      style: {
                                                        "margin": "0"
                                                      },
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Div,
                                                          {
                                                            key: "p.AgentCommons.Agent_Overview.layoutGrid2$row0",
                                                            $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid2$row0",
                                                            class: "row no-gutters",
                                                            style: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Div,
                                                                {
                                                                  key: "p.AgentCommons.Agent_Overview.layoutGrid2$row0$column0",
                                                                  $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid2$row0$column0",
                                                                  class: "col-lg-4 col-md col",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.AgentCommons.Snippet_Agent_Overview.container28",
                                                                        $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container28",
                                                                        class: "mx-name-container28 spacing-outer-bottom",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.AgentCommons.Snippet_Agent_Overview.text33",
                                                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text33",
                                                                              class: "mx-name-text33 title-width text-semibold text-small spacing-outer-right spacing-outer-bottom",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Title" }, "args": {} }
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
                                                                  key: "p.AgentCommons.Agent_Overview.layoutGrid2$row0$column1",
                                                                  $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid2$row0$column1",
                                                                  class: "col-lg-8 col-md col",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.AgentCommons.Snippet_Agent_Overview.container19",
                                                                        $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container19",
                                                                        class: "mx-name-container19 spacing-outer-bottom",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.AgentCommons.Snippet_Agent_Overview.text22",
                                                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text22",
                                                                              class: "mx-name-text22 text-width text-normal text-small spacing-outer-bottom",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "conditional", "condition": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "IsDraftVersion" }] }, "then": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "v" }, { "type": "function", "name": "formatDecimal", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "VersionNumber" }] }] }, { "type": "literal", "value": " " }] }, "else": { "type": "literal", "value": "" } }, { "type": "variable", "variable": "currentObject", "path": "Title" }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataView1", "source": "object" } } }
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
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Div,
                                                          {
                                                            key: "p.AgentCommons.Agent_Overview.layoutGrid2$row1",
                                                            $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid2$row1",
                                                            class: "row no-gutters",
                                                            style: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Div,
                                                                {
                                                                  key: "p.AgentCommons.Agent_Overview.layoutGrid2$row1$column0",
                                                                  $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid2$row1$column0",
                                                                  class: "col-lg-4 col-md col",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.AgentCommons.Snippet_Agent_Overview.container20",
                                                                        $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container20",
                                                                        class: "mx-name-container20 spacing-outer-bottom",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.AgentCommons.Snippet_Agent_Overview.text46",
                                                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text46",
                                                                              class: "mx-name-text46 title-width text-semibold text-small spacing-outer-right spacing-outer-bottom",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
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
                                                                  key: "p.AgentCommons.Agent_Overview.layoutGrid2$row1$column1",
                                                                  $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid2$row1$column1",
                                                                  class: "col-lg-8 col-md col",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.AgentCommons.Snippet_Agent_Overview.container21",
                                                                        $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container21",
                                                                        class: "mx-name-container21 spacing-outer-bottom",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.AgentCommons.Snippet_Agent_Overview.text26",
                                                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text26",
                                                                              class: "mx-name-text26 text-width text-normal text-small spacing-outer-bottom",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Description" }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataView1", "source": "object" } } }
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
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Div,
                                                          {
                                                            key: "p.AgentCommons.Agent_Overview.layoutGrid2$row2",
                                                            $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid2$row2",
                                                            class: "row no-gutters",
                                                            style: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Div,
                                                                {
                                                                  key: "p.AgentCommons.Agent_Overview.layoutGrid2$row2$column0",
                                                                  $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid2$row2$column0",
                                                                  class: "col-lg-4 col-md col",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.AgentCommons.Snippet_Agent_Overview.container22",
                                                                        $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container22",
                                                                        class: "mx-name-container22 spacing-outer-bottom",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.AgentCommons.Snippet_Agent_Overview.text47",
                                                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text47",
                                                                              class: "mx-name-text47 title-width text-semibold text-small spacing-outer-right spacing-outer-bottom",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Date" }, "args": {} }
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
                                                                  key: "p.AgentCommons.Agent_Overview.layoutGrid2$row2$column1",
                                                                  $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid2$row2$column1",
                                                                  class: "col-lg-8 col-md col",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.AgentCommons.Snippet_Agent_Overview.container23",
                                                                        $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container23",
                                                                        class: "mx-name-container23 spacing-outer-bottom",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.AgentCommons.Snippet_Agent_Overview.text29",
                                                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text29",
                                                                              class: "mx-name-text29 text-width text-normal text-small spacing-outer-bottom",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "VersionChangedDate" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataView1", "source": "object" } } }
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
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Div,
                                                          {
                                                            key: "p.AgentCommons.Agent_Overview.layoutGrid2$row3",
                                                            $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid2$row3",
                                                            class: "row no-gutters",
                                                            style: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Div,
                                                                {
                                                                  key: "p.AgentCommons.Agent_Overview.layoutGrid2$row3$column0",
                                                                  $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid2$row3$column0",
                                                                  class: "col-lg-4 col-md col",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.AgentCommons.Snippet_Agent_Overview.container24",
                                                                        $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container24",
                                                                        class: "mx-name-container24 spacing-outer-bottom",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.AgentCommons.Snippet_Agent_Overview.text48",
                                                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text48",
                                                                              class: "mx-name-text48 title-width text-semibold text-small spacing-outer-right spacing-outer-bottom",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Owner" }, "args": {} }
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
                                                                  key: "p.AgentCommons.Agent_Overview.layoutGrid2$row3$column1",
                                                                  $widgetId: "p.AgentCommons.Agent_Overview.layoutGrid2$row3$column1",
                                                                  class: "col-lg-8 col-md col",
                                                                  style: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.AgentCommons.Snippet_Agent_Overview.container25",
                                                                        $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container25",
                                                                        class: "mx-name-container25 spacing-outer-bottom",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.AgentCommons.Snippet_Agent_Overview.text28",
                                                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text28",
                                                                              class: "mx-name-text28 text-width text-normal text-small spacing-outer-bottom",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "VersionOwner" }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataView1", "source": "object" } } }
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
                                                            ]
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ],
                                                textMessage: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                tooltipPosition: "right",
                                                arrowPosition: "end",
                                                openOn: "hoverFocus",
                                                class: "mx-name-tooltip3 agent-tooltip agent-tooltip-w330",
                                                style: void 0,
                                                tabIndex: void 0
                                              }
                                            )
                                          ],
                                          hideFooter: true,
                                          footer: void 0
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                )
                              ]
                            }),
                            "dynamicText": selectTranslation([
                              void 0
                            ]),
                            "exportValue": selectTranslation([
                              void 0
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Newest" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": void 0,
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": true,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "yes",
                            "allowEventPropagation": true,
                            "width": "autoFit",
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false
                          },
                          {
                            "showContentAs": "customContent",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "AgentCommons.Agent",
                              "attribute": "AgentOwner",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.4",
                              "isList": false
                            }),
                            "content": TemplatedWidgetProperty({
                              "dataSourceId": "p.4",
                              "editable": false,
                              "children": () => [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.Snippet_Agent_Overview.container32",
                                    $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container32",
                                    class: "mx-name-container32",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $DataView,
                                        {
                                          key: "p.AgentCommons.Snippet_Agent_Overview.dataView3",
                                          $widgetId: "p.AgentCommons.Snippet_Agent_Overview.dataView3",
                                          class: "mx-name-dataView3 form-vertical",
                                          style: void 0,
                                          tabIndex: void 0,
                                          object: MicroflowObjectProperty({
                                            "dataSourceId": "p.185",
                                            "scope": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21",
                                            "editable": true,
                                            "operationId": "ZjeqdPl9cVqKoNC1k/q+ig",
                                            "argMap": { "Agent": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } }
                                          }),
                                          emptyMessage: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          body: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.AgentCommons.Snippet_Agent_Overview.text6",
                                                $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text6",
                                                class: "mx-name-text6",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "LastChangedBy" }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataView3", "source": "object" } } }
                                                  })
                                                ]),
                                                renderMode: "span"
                                              }
                                            )
                                          ],
                                          hideFooter: true,
                                          footer: void 0
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                )
                              ]
                            }),
                            "dynamicText": selectTranslation([
                              void 0
                            ]),
                            "exportValue": selectTranslation([
                              void 0
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Last edited by" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": void 0,
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": true,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "yes",
                            "allowEventPropagation": true,
                            "width": "autoFill",
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false
                          },
                          {
                            "showContentAs": "customContent",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "AgentCommons.Agent",
                              "attribute": "Title",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.4",
                              "isList": false
                            }),
                            "content": TemplatedWidgetProperty({
                              "dataSourceId": "p.4",
                              "editable": false,
                              "children": () => [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.Snippet_Agent_Overview.container29",
                                    $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container29",
                                    class: "mx-name-container29",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $DataView,
                                        {
                                          key: "p.AgentCommons.Snippet_Agent_Overview.dataView2",
                                          $widgetId: "p.AgentCommons.Snippet_Agent_Overview.dataView2",
                                          class: "mx-name-dataView2 form-vertical",
                                          style: void 0,
                                          tabIndex: void 0,
                                          object: MicroflowObjectProperty({
                                            "dataSourceId": "p.192",
                                            "scope": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21",
                                            "editable": true,
                                            "operationId": "K99Mklvbp12kDilKSPc8LA",
                                            "argMap": { "Agent": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } }
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
                                                key: "p.AgentCommons.Snippet_Agent_Overview.text2$visibility",
                                                $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text2$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataView2", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.Snippet_Agent_Overview.text2",
                                                      $widgetId: "p.AgentCommons.Snippet_Agent_Overview.text2",
                                                      class: "mx-name-text2",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "VersionChangedDate" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataView2", "source": "object" } } }
                                                        })
                                                      ]),
                                                      renderMode: "span"
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ],
                                          hideFooter: true,
                                          footer: void 0
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                )
                              ]
                            }),
                            "dynamicText": selectTranslation([
                              void 0
                            ]),
                            "exportValue": selectTranslation([
                              void 0
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Last edited" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": void 0,
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": true,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "yes",
                            "allowEventPropagation": true,
                            "width": "autoFit",
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false
                          },
                          {
                            "showContentAs": "customContent",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "AgentCommons.Agent",
                              "attribute": "Title",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.4",
                              "isList": false
                            }),
                            "content": TemplatedWidgetProperty({
                              "dataSourceId": "p.4",
                              "editable": false,
                              "children": () => [
                                /* @__PURE__ */ React.createElement(
                                  $PopupMenu,
                                  {
                                    key: "p.AgentCommons.Snippet_Agent_Overview.pop_upMenu1",
                                    $widgetId: "p.AgentCommons.Snippet_Agent_Overview.pop_upMenu1",
                                    advancedMode: true,
                                    menuTrigger: [
                                      /* @__PURE__ */ React.createElement(
                                        $Image,
                                        {
                                          key: "p.AgentCommons.Snippet_Agent_Overview.staticImage1",
                                          $widgetId: "p.AgentCommons.Snippet_Agent_Overview.staticImage1",
                                          datasource: "image",
                                          imageObject: WebStaticImageProperty({
                                            "image": { "uri": "img/AgentCommons$Images_AgentBuilder$ellipsis.svg" }
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
                                          class: "mx-name-staticImage1 pull-right",
                                          style: void 0,
                                          tabIndex: void 0
                                        }
                                      )
                                    ],
                                    basicItems: [],
                                    customItems: [
                                      {
                                        "content": [
                                          /* @__PURE__ */ React.createElement(
                                            $Container,
                                            {
                                              key: "p.AgentCommons.Snippet_Agent_Overview.container11",
                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container11",
                                              class: "mx-name-container11 popupmenu-custom-item-container",
                                              style: void 0,
                                              renderMode: "div",
                                              onClick: void 0,
                                              content: [
                                                /* @__PURE__ */ React.createElement(
                                                  $ConditionalVisibilityWrapper,
                                                  {
                                                    key: "p.AgentCommons.Snippet_Agent_Overview.actionButton6$visibility",
                                                    $widgetId: "p.AgentCommons.Snippet_Agent_Overview.actionButton6$visibility",
                                                    visible: ExpressionProperty({
                                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                    }),
                                                    contents: [
                                                      /* @__PURE__ */ React.createElement(
                                                        $ActionButton,
                                                        {
                                                          key: "p.AgentCommons.Snippet_Agent_Overview.actionButton6",
                                                          $widgetId: "p.AgentCommons.Snippet_Agent_Overview.actionButton6",
                                                          buttonId: "p.AgentCommons.Snippet_Agent_Overview.actionButton6",
                                                          class: "mx-name-actionButton6",
                                                          style: void 0,
                                                          tabIndex: void 0,
                                                          renderType: "link",
                                                          role: "button",
                                                          buttonClass: "btn-default",
                                                          caption: selectTranslation([
                                                            ExpressionProperty({
                                                              "expression": { "expr": { "type": "literal", "value": "Edit agent details" }, "args": {} }
                                                            })
                                                          ]),
                                                          tooltip: TextProperty({
                                                            "value": selectTranslation([
                                                              ""
                                                            ])
                                                          }),
                                                          icon: WebIconProperty({
                                                            "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$pencil.svg" }
                                                          }),
                                                          action: ActionProperty({
                                                            "action": { "type": "openPage", "argMap": { "param$Agent": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } }, "config": { "name": "AgentCommons/Agent_Edit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                        "visible": ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                        }),
                                        "action": void 0
                                      },
                                      {
                                        "content": [
                                          /* @__PURE__ */ React.createElement(
                                            $Container,
                                            {
                                              key: "p.AgentCommons.Snippet_Agent_Overview.container10",
                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container10",
                                              class: "mx-name-container10 popupmenu-custom-item-container",
                                              style: void 0,
                                              renderMode: "div",
                                              onClick: void 0,
                                              content: [
                                                /* @__PURE__ */ React.createElement(
                                                  $ConditionalVisibilityWrapper,
                                                  {
                                                    key: "p.AgentCommons.Snippet_Agent_Overview.actionButton5$visibility",
                                                    $widgetId: "p.AgentCommons.Snippet_Agent_Overview.actionButton5$visibility",
                                                    visible: ExpressionProperty({
                                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                    }),
                                                    contents: [
                                                      /* @__PURE__ */ React.createElement(
                                                        $ActionButton,
                                                        {
                                                          key: "p.AgentCommons.Snippet_Agent_Overview.actionButton5",
                                                          $widgetId: "p.AgentCommons.Snippet_Agent_Overview.actionButton5",
                                                          buttonId: "p.AgentCommons.Snippet_Agent_Overview.actionButton5",
                                                          class: "mx-name-actionButton5",
                                                          style: void 0,
                                                          tabIndex: void 0,
                                                          renderType: "link",
                                                          role: "button",
                                                          buttonClass: "btn-default",
                                                          caption: selectTranslation([
                                                            ExpressionProperty({
                                                              "expression": { "expr": { "type": "literal", "value": "Select version in use" }, "args": {} }
                                                            })
                                                          ]),
                                                          tooltip: TextProperty({
                                                            "value": selectTranslation([
                                                              ""
                                                            ])
                                                          }),
                                                          icon: WebIconProperty({
                                                            "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$circle_check.svg" }
                                                          }),
                                                          action: ActionProperty({
                                                            "action": { "type": "callMicroflow", "argMap": { "Agent": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } }, "config": { "operationId": "gcGwRhGEcVGf9lD4Nkkfmg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                        "visible": ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                        }),
                                        "action": void 0
                                      },
                                      {
                                        "content": [
                                          /* @__PURE__ */ React.createElement(
                                            $Container,
                                            {
                                              key: "p.AgentCommons.Snippet_Agent_Overview.container7",
                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container7",
                                              class: "mx-name-container7 popupmenu-custom-item-container",
                                              style: void 0,
                                              renderMode: "div",
                                              onClick: void 0,
                                              content: [
                                                /* @__PURE__ */ React.createElement(
                                                  $ConditionalVisibilityWrapper,
                                                  {
                                                    key: "p.AgentCommons.Snippet_Agent_Overview.actionButton4$visibility",
                                                    $widgetId: "p.AgentCommons.Snippet_Agent_Overview.actionButton4$visibility",
                                                    visible: ExpressionProperty({
                                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                    }),
                                                    contents: [
                                                      /* @__PURE__ */ React.createElement(
                                                        $ActionButton,
                                                        {
                                                          key: "p.AgentCommons.Snippet_Agent_Overview.actionButton4",
                                                          $widgetId: "p.AgentCommons.Snippet_Agent_Overview.actionButton4",
                                                          buttonId: "p.AgentCommons.Snippet_Agent_Overview.actionButton4",
                                                          class: "mx-name-actionButton4",
                                                          style: void 0,
                                                          tabIndex: void 0,
                                                          renderType: "link",
                                                          role: "button",
                                                          buttonClass: "btn-default",
                                                          caption: selectTranslation([
                                                            ExpressionProperty({
                                                              "expression": { "expr": { "type": "literal", "value": "Export" }, "args": {} }
                                                            })
                                                          ]),
                                                          tooltip: TextProperty({
                                                            "value": selectTranslation([
                                                              ""
                                                            ])
                                                          }),
                                                          icon: WebIconProperty({
                                                            "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$upload_button.svg" }
                                                          }),
                                                          action: ActionProperty({
                                                            "action": { "type": "callMicroflow", "argMap": { "Agent": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } }, "config": { "operationId": "OddrNf5bdl2DlYnL/8q3cA", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                        "visible": ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                        }),
                                        "action": void 0
                                      },
                                      {
                                        "content": [
                                          /* @__PURE__ */ React.createElement(
                                            $Container,
                                            {
                                              key: "p.AgentCommons.Snippet_Agent_Overview.container8",
                                              $widgetId: "p.AgentCommons.Snippet_Agent_Overview.container8",
                                              class: "mx-name-container8 popupmenu-custom-item-container",
                                              style: void 0,
                                              renderMode: "div",
                                              onClick: void 0,
                                              content: [
                                                /* @__PURE__ */ React.createElement(
                                                  $ConditionalVisibilityWrapper,
                                                  {
                                                    key: "p.AgentCommons.Snippet_Agent_Overview.actionButton3$visibility",
                                                    $widgetId: "p.AgentCommons.Snippet_Agent_Overview.actionButton3$visibility",
                                                    visible: ExpressionProperty({
                                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                    }),
                                                    contents: [
                                                      /* @__PURE__ */ React.createElement(
                                                        $ActionButton,
                                                        {
                                                          key: "p.AgentCommons.Snippet_Agent_Overview.actionButton3",
                                                          $widgetId: "p.AgentCommons.Snippet_Agent_Overview.actionButton3",
                                                          buttonId: "p.AgentCommons.Snippet_Agent_Overview.actionButton3",
                                                          class: "mx-name-actionButton3",
                                                          style: void 0,
                                                          tabIndex: void 0,
                                                          renderType: "link",
                                                          role: "button",
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
                                                            "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$trash_can.svg" }
                                                          }),
                                                          action: ActionProperty({
                                                            "action": { "type": "callMicroflow", "argMap": { "Agent": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } }, "config": { "operationId": "3AgV6/klo1W4QBvCeoaTBg", "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure?"]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                        "visible": ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                        }),
                                        "action": void 0
                                      }
                                    ],
                                    trigger: "onhover",
                                    position: "right",
                                    menuToggle: false,
                                    hoverCloseOn: "onHoverLeave",
                                    class: "mx-name-pop_upMenu1 popupmenu-custom-item-hover popupmenu--display-flex",
                                    style: void 0,
                                    tabIndex: void 0
                                  }
                                )
                              ]
                            }),
                            "dynamicText": selectTranslation([
                              void 0
                            ]),
                            "exportValue": selectTranslation([
                              void 0
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": " " }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": void 0,
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": true,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "yes",
                            "allowEventPropagation": true,
                            "width": "autoFit",
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false
                          }
                        ],
                        columnsFilterable: true,
                        pageSize: 20,
                        pagination: "buttons",
                        pagingPosition: "bottom",
                        showPagingButtons: "always",
                        loadMoreButtonCaption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                          })
                        ]),
                        showEmptyPlaceholder: "none",
                        emptyPlaceholder: void 0,
                        rowClass: void 0,
                        onClickTrigger: "single",
                        onClick: ListActionProperty({
                          "action": { "type": "callMicroflow", "argMap": { "Agent": { "widget": "p.AgentCommons.Snippet_Agent_Overview.dataGrid21", "source": "object" } }, "config": { "operationId": "/HRjWwiSP1C4kwg8JKmBkA", "async": true, "progress": { "message": selectTranslation([""]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                          "abortOnServerValidation": false,
                          "dataSourceId": "p.4",
                          "argumentTypes": {}
                        }),
                        onSelectionChange: void 0,
                        columnsSortable: false,
                        columnsResizable: false,
                        columnsDraggable: false,
                        columnsHidable: false,
                        configurationStorageType: "attribute",
                        filtersPlaceholder: void 0,
                        filterSectionTitle: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                          })
                        ]),
                        exportDialogLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Export progress" }, "args": {} }
                          })
                        ]),
                        cancelExportLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Cancel data export" }, "args": {} }
                          })
                        ]),
                        selectRowLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Select row" }, "args": {} }
                          })
                        ]),
                        loadingType: "spinner",
                        showNumberOfRows: false,
                        storeFiltersInPersonalization: true,
                        selectAllRowsLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Select all rows" }, "args": {} }
                          })
                        ]),
                        keepSelection: false,
                        refreshIndicator: false,
                        selectedCountTemplateSingular: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                          })
                        ]),
                        selectedCountTemplatePlural: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                          })
                        ]),
                        enableSelectAll: false,
                        selectionCounterPosition: "bottom",
                        selectingAllLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Selecting all items..." }, "args": {} }
                          })
                        ]),
                        cancelSelectionLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Cancel selection" }, "args": {} }
                          })
                        ]),
                        selectAllText: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Select all rows in the data source" }, "args": {} }
                          })
                        ]),
                        selectAllTemplate: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Select all %d rows in the data source" }, "args": {} }
                          })
                        ]),
                        allSelectedText: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "All %d rows selected." }, "args": {} }
                          })
                        ]),
                        clearSelectionButtonLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                          })
                        ]),
                        class: "mx-name-dataGrid21 datagrid--no-scroll table-hover spacing-outer-top-large",
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
      ]
    }
  )
]);
const title = selectTranslation([
  "Agents"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const url = "/p/agents";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title, url };
