import { reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { ListAttributeProperty, AttributeMetaDataProperty } from '../ListAttributeProperty-dWq-nfHX.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-BEIxbT2n.js';
import { ListActionProperty } from '../ListActionProperty-CSktymVx.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-CgBaKmKA.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { WebIconProperty } from '../WebIconProperty-I8EGGvK6.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BilSZaU4.js';
import { Container } from '../Container-PSi6m2QL.js';
import { DatagridWidgetModule } from '../Datagrid-CPOmkQcC.js';
import { DatagridTextFilterWidgetModule } from '../DatagridTextFilter-CNeyl2wT.js';
import { Div } from '../Div-DnhZCXw4.js';
import '../Fragment-kXArd_1S.js';
import { ImageWidgetModule } from '../Image-Cid1Yr5n.js';
import { ListView } from '../ListView-CIUHgBvp.js';
import { PopupMenuWidgetModule } from '../PopupMenu-DvZGcG8d.js';
import { Text } from '../Text-Ct6rfb-k.js';
import { content as content$1 } from '../Atlas_Core.Atlas_TopBar-CLBulviL.js';
import '../CTcC6PjV-eX91G0mv.js';
import '../uEIG9e6s-VBk3qU43.js';
import '../CxoxYXlg-BJ3P5g_E.js';
import '../UeptbR6O-Dse5KB9T.js';
import '../CkBXggmw-D1iecObi.js';
import '../CTQxk13g-CU8g3epp.js';
import '../index-BP8nYpIk.js';
import '../InlineText-f914ePRH.js';
import '../ListExpressionProperty-Cd_aouEd.js';
import '../WebStaticImageProperty-B3bpPygB.js';
import '../SidebarToggle-CDtAU1t8.js';
import '../D7vCi_Rn-CSXZhW_h.js';
import '../CGlz0zm4-D9CbusC5.js';
import '../ScrollContainer-DO1bE89X.js';
import '../MenuBar-Cfla47fm.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const PopupMenu = Object.getOwnPropertyDescriptor(PopupMenuWidgetModule, "PopupMenu")?.value || Object.getOwnPropertyDescriptor(PopupMenuWidgetModule, "default")?.value;
const { $Container, $Div, $Text, $Fragment, $ConditionalVisibilityWrapper, $ActionButton, $Datagrid, $ListView, $PopupMenu, $Image, $DatagridTextFilter } = asPluginWidgets({ Container, Div, Text, Fragment, ConditionalVisibilityWrapper, ActionButton, Datagrid, ListView, PopupMenu, Image, DatagridTextFilter });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p.MyFirstAIBot.MistralConfiguration_Overview.container1",
      $widgetId: "p.MyFirstAIBot.MistralConfiguration_Overview.container1",
      class: "mx-name-container1",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstAIBot.MistralConfiguration_Overview.layoutGrid1",
            $widgetId: "p.MyFirstAIBot.MistralConfiguration_Overview.layoutGrid1",
            class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstAIBot.MistralConfiguration_Overview.layoutGrid1$row0",
                  $widgetId: "p.MyFirstAIBot.MistralConfiguration_Overview.layoutGrid1$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.MyFirstAIBot.MistralConfiguration_Overview.layoutGrid1$row0$column0",
                        $widgetId: "p.MyFirstAIBot.MistralConfiguration_Overview.layoutGrid1$row0$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.MyFirstAIBot.MistralConfiguration_Overview.text1",
                              $widgetId: "p.MyFirstAIBot.MistralConfiguration_Overview.text1",
                              class: "mx-name-text1",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Mistral Configuration" }, "args": {} }
                                })
                              ]),
                              renderMode: "h2"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Fragment,
                            {
                              key: "p.MyFirstAIBot.MistralConfiguration_Overview.snippetCall1",
                              $widgetId: "p.MyFirstAIBot.MistralConfiguration_Overview.snippetCall1",
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.MistralConnector.Snippet_MistralConfigurations.actionButton6$visibility",
                                    $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.actionButton6$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.MistralConnector.Snippet_MistralConfigurations.actionButton6",
                                          $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.actionButton6",
                                          buttonId: "p.MistralConnector.Snippet_MistralConfigurations.actionButton6",
                                          class: "mx-name-actionButton6",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "New" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: void 0,
                                          action: ActionProperty({
                                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "25eQH2uKKVSqO+UJfLY9CQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Datagrid,
                                  {
                                    key: "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21",
                                    $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21",
                                    datasource: DatabaseObjectListProperty({
                                      "dataSourceId": "p.2",
                                      "entity": "MistralConnector.MistralConfiguration",
                                      "operationId": "S2HCR6Qa1VyTSpZfiQKSyg",
                                      "sort": []
                                    }),
                                    refreshInterval: 0,
                                    itemSelectionMethod: "checkbox",
                                    itemSelectionMode: "clear",
                                    showSelectAllToggle: true,
                                    columns: [
                                      {
                                        "showContentAs": "attribute",
                                        "attribute": ListAttributeProperty({
                                          "path": "",
                                          "entity": "MistralConnector.MistralConfiguration",
                                          "attribute": "DisplayName",
                                          "attributeType": "String",
                                          "sortable": true,
                                          "filterable": true,
                                          "dataSourceId": "p.2",
                                          "isList": false
                                        }),
                                        "content": void 0,
                                        "dynamicText": selectTranslation([
                                          void 0
                                        ]),
                                        "exportValue": selectTranslation([
                                          void 0
                                        ]),
                                        "header": selectTranslation([
                                          ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Display name" }, "args": {} }
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
                                        "showContentAs": "attribute",
                                        "attribute": ListAttributeProperty({
                                          "path": "",
                                          "entity": "MistralConnector.MistralConfiguration",
                                          "attribute": "Endpoint",
                                          "attributeType": "String",
                                          "sortable": true,
                                          "filterable": true,
                                          "dataSourceId": "p.2",
                                          "isList": false
                                        }),
                                        "content": void 0,
                                        "dynamicText": selectTranslation([
                                          void 0
                                        ]),
                                        "exportValue": selectTranslation([
                                          void 0
                                        ]),
                                        "header": selectTranslation([
                                          ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Endpoint" }, "args": {} }
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
                                          "entity": "MistralConnector.MistralConfiguration",
                                          "attribute": "DisplayName",
                                          "attributeType": "String",
                                          "sortable": true,
                                          "filterable": true,
                                          "dataSourceId": "p.2",
                                          "isList": false
                                        }),
                                        "content": TemplatedWidgetProperty({
                                          "dataSourceId": "p.2",
                                          "editable": false,
                                          "children": () => [
                                            /* @__PURE__ */ React.createElement(
                                              $ListView,
                                              {
                                                key: "p.MistralConnector.Snippet_MistralConfigurations.listView1",
                                                $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.listView1",
                                                class: "mx-name-listView1 listview-horizontal listview-empty-deployed-models listview-stylingless listview-sm",
                                                style: void 0,
                                                listValue: DatabaseObjectListProperty({
                                                  "dataSourceId": "p.3",
                                                  "entity": "MistralConnector.MistralDeployedModel",
                                                  "scope": "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21",
                                                  "operationId": "kxv0mHI3dli3hGVqa/jI2A",
                                                  "sort": [
                                                    [
                                                      "OutputModality",
                                                      "desc"
                                                    ],
                                                    [
                                                      "DisplayName",
                                                      "desc"
                                                    ]
                                                  ],
                                                  "arguments": {
                                                    "currentObject": [
                                                      "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21"
                                                    ],
                                                    "CurrentObject": [
                                                      "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21"
                                                    ]
                                                  },
                                                  "constraints": { "type": "function", "name": "and", "parameters": [{ "type": "attribute", "attribute": "IsActive", "context": "MistralConnector.MistralDeployedModel", "attributeType": "Boolean" }, { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "MistralConnector.MistralDeployedModel", "attributeType": "ObjectReference" }, "rightEntity": "OpenAIConnector.OpenAIDeployedModel", "rightEntityAlias": "OpenAIConnector.OpenAIDeployedModel", "right": { "type": "attribute", "attribute": "OpenAIConnector.OpenAIDeployedModel_Configuration", "context": "OpenAIConnector.OpenAIDeployedModel", "attributeType": "ObjectReference" }, "next": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "id", "context": "OpenAIConnector.OpenAIDeployedModel", "attributeType": "ObjectReference" }, { "type": "variable", "name": "currentObject" }] } }] }
                                                }),
                                                itemTemplate: TemplatedWidgetProperty({
                                                  "dataSourceId": "p.3",
                                                  "editable": false,
                                                  "children": () => [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Text,
                                                      {
                                                        key: "p.MistralConnector.Snippet_MistralConfigurations.text1",
                                                        $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.text1",
                                                        class: "mx-name-text1",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "DisplayName" }, "args": { "currentObject": { "widget": "p.MistralConnector.Snippet_MistralConfigurations.listView1", "source": "object" } } }
                                                          })
                                                        ]),
                                                        renderMode: "span"
                                                      }
                                                    )
                                                  ]
                                                }),
                                                onClick: void 0,
                                                pageSize: 22
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
                                            "expression": { "expr": { "type": "literal", "value": "Deployed models" }, "args": {} }
                                          })
                                        ]),
                                        "tooltip": selectTranslation([
                                          void 0
                                        ]),
                                        "filter": void 0,
                                        "visible": ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                        }),
                                        "sortable": false,
                                        "resizable": false,
                                        "draggable": false,
                                        "hidable": "yes",
                                        "allowEventPropagation": false,
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
                                          "entity": "MistralConnector.MistralConfiguration",
                                          "attribute": "DisplayName",
                                          "attributeType": "String",
                                          "sortable": true,
                                          "filterable": true,
                                          "dataSourceId": "p.2",
                                          "isList": false
                                        }),
                                        "content": TemplatedWidgetProperty({
                                          "dataSourceId": "p.2",
                                          "editable": false,
                                          "children": () => [
                                            /* @__PURE__ */ React.createElement(
                                              $PopupMenu,
                                              {
                                                key: "p.MistralConnector.Snippet_MistralConfigurations.pop_upMenu1",
                                                $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.pop_upMenu1",
                                                advancedMode: true,
                                                menuTrigger: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Image,
                                                    {
                                                      key: "p.MistralConnector.Snippet_MistralConfigurations.image1",
                                                      $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.image1",
                                                      datasource: "icon",
                                                      imageObject: void 0,
                                                      defaultImageDynamic: void 0,
                                                      imageUrl: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      imageIcon: WebIconProperty({
                                                        "icon": { "type": "image", "iconUrl": "img/OpenAIConnector$Image_collection$ellipsis.svg" }
                                                      }),
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
                                                  )
                                                ],
                                                basicItems: [],
                                                customItems: [
                                                  {
                                                    "content": [
                                                      /* @__PURE__ */ React.createElement(
                                                        $Container,
                                                        {
                                                          key: "p.MistralConnector.Snippet_MistralConfigurations.container3",
                                                          $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.container3",
                                                          class: "mx-name-container3 popupmenu-custom-item-container spacing-outer-top-none spacing-outer-bottom-none",
                                                          style: void 0,
                                                          renderMode: "div",
                                                          onClick: void 0,
                                                          content: [
                                                            /* @__PURE__ */ React.createElement(
                                                              $ConditionalVisibilityWrapper,
                                                              {
                                                                key: "p.MistralConnector.Snippet_MistralConfigurations.actionButton2$visibility",
                                                                $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.actionButton2$visibility",
                                                                visible: ExpressionProperty({
                                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                }),
                                                                contents: [
                                                                  /* @__PURE__ */ React.createElement(
                                                                    $ActionButton,
                                                                    {
                                                                      key: "p.MistralConnector.Snippet_MistralConfigurations.actionButton2",
                                                                      $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.actionButton2",
                                                                      buttonId: "p.MistralConnector.Snippet_MistralConfigurations.actionButton2",
                                                                      class: "mx-name-actionButton2 btn-without-border btn-no-hover",
                                                                      style: void 0,
                                                                      tabIndex: void 0,
                                                                      renderType: "link",
                                                                      role: "button",
                                                                      buttonClass: "btn-default",
                                                                      caption: selectTranslation([
                                                                        ExpressionProperty({
                                                                          "expression": { "expr": { "type": "literal", "value": "Edit configuration" }, "args": {} }
                                                                        })
                                                                      ]),
                                                                      tooltip: TextProperty({
                                                                        "value": selectTranslation([
                                                                          ""
                                                                        ])
                                                                      }),
                                                                      icon: WebIconProperty({
                                                                        "icon": { "type": "glyph", "iconClass": "glyphicon-pencil" }
                                                                      }),
                                                                      action: ActionProperty({
                                                                        "action": { "type": "callMicroflow", "argMap": { "MistralConfiguration": { "widget": "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21", "source": "object" } }, "config": { "operationId": "FwhZ5oM8ilWcEpoB3puu6g", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                          key: "p.MistralConnector.Snippet_MistralConfigurations.container4",
                                                          $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.container4",
                                                          class: "mx-name-container4 popupmenu-custom-item-container spacing-outer-top-none spacing-outer-bottom-none",
                                                          style: void 0,
                                                          renderMode: "div",
                                                          onClick: void 0,
                                                          content: [
                                                            /* @__PURE__ */ React.createElement(
                                                              $ConditionalVisibilityWrapper,
                                                              {
                                                                key: "p.MistralConnector.Snippet_MistralConfigurations.actionButton3$visibility",
                                                                $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.actionButton3$visibility",
                                                                visible: ExpressionProperty({
                                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                }),
                                                                contents: [
                                                                  /* @__PURE__ */ React.createElement(
                                                                    $ActionButton,
                                                                    {
                                                                      key: "p.MistralConnector.Snippet_MistralConfigurations.actionButton3",
                                                                      $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.actionButton3",
                                                                      buttonId: "p.MistralConnector.Snippet_MistralConfigurations.actionButton3",
                                                                      class: "mx-name-actionButton3 btn-without-border btn-no-hover",
                                                                      style: void 0,
                                                                      tabIndex: void 0,
                                                                      renderType: "link",
                                                                      role: "button",
                                                                      buttonClass: "btn-default",
                                                                      caption: selectTranslation([
                                                                        ExpressionProperty({
                                                                          "expression": { "expr": { "type": "literal", "value": "Manage deployed models" }, "args": {} }
                                                                        })
                                                                      ]),
                                                                      tooltip: TextProperty({
                                                                        "value": selectTranslation([
                                                                          ""
                                                                        ])
                                                                      }),
                                                                      icon: WebIconProperty({
                                                                        "icon": { "type": "glyph", "iconClass": "glyphicon-th-list" }
                                                                      }),
                                                                      action: ActionProperty({
                                                                        "action": { "type": "callMicroflow", "argMap": { "MistralConfiguration": { "widget": "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21", "source": "object" } }, "config": { "operationId": "3lE3zfoe91u0/zMVPls3wg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                          key: "p.MistralConnector.Snippet_MistralConfigurations.container7",
                                                          $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.container7",
                                                          class: "mx-name-container7 popupmenu-custom-item-container spacing-outer-top-none spacing-outer-bottom-none",
                                                          style: void 0,
                                                          renderMode: "div",
                                                          onClick: void 0,
                                                          content: [
                                                            /* @__PURE__ */ React.createElement(
                                                              $ConditionalVisibilityWrapper,
                                                              {
                                                                key: "p.MistralConnector.Snippet_MistralConfigurations.actionButton4$visibility",
                                                                $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.actionButton4$visibility",
                                                                visible: ExpressionProperty({
                                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                }),
                                                                contents: [
                                                                  /* @__PURE__ */ React.createElement(
                                                                    $ActionButton,
                                                                    {
                                                                      key: "p.MistralConnector.Snippet_MistralConfigurations.actionButton4",
                                                                      $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.actionButton4",
                                                                      buttonId: "p.MistralConnector.Snippet_MistralConfigurations.actionButton4",
                                                                      class: "mx-name-actionButton4 btn-without-border btn-no-hover",
                                                                      style: void 0,
                                                                      tabIndex: void 0,
                                                                      renderType: "link",
                                                                      role: "button",
                                                                      buttonClass: "btn-default",
                                                                      caption: selectTranslation([
                                                                        ExpressionProperty({
                                                                          "expression": { "expr": { "type": "literal", "value": "Duplicate" }, "args": {} }
                                                                        })
                                                                      ]),
                                                                      tooltip: TextProperty({
                                                                        "value": selectTranslation([
                                                                          ""
                                                                        ])
                                                                      }),
                                                                      icon: WebIconProperty({
                                                                        "icon": { "type": "glyph", "iconClass": "glyphicon-plus" }
                                                                      }),
                                                                      action: ActionProperty({
                                                                        "action": { "type": "callMicroflow", "argMap": { "MistralConfiguration_Existing": { "widget": "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21", "source": "object" } }, "config": { "operationId": "twVQQ+NDkF+4/7A2o9Pnvg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                          key: "p.MistralConnector.Snippet_MistralConfigurations.container6",
                                                          $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.container6",
                                                          class: "mx-name-container6 popupmenu-custom-item-container spacing-outer-top-none spacing-outer-bottom-none",
                                                          style: void 0,
                                                          renderMode: "div",
                                                          onClick: void 0,
                                                          content: [
                                                            /* @__PURE__ */ React.createElement(
                                                              $ConditionalVisibilityWrapper,
                                                              {
                                                                key: "p.MistralConnector.Snippet_MistralConfigurations.actionButton11$visibility",
                                                                $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.actionButton11$visibility",
                                                                visible: ExpressionProperty({
                                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                }),
                                                                contents: [
                                                                  /* @__PURE__ */ React.createElement(
                                                                    $ActionButton,
                                                                    {
                                                                      key: "p.MistralConnector.Snippet_MistralConfigurations.actionButton11",
                                                                      $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.actionButton11",
                                                                      buttonId: "p.MistralConnector.Snippet_MistralConfigurations.actionButton11",
                                                                      class: "mx-name-actionButton11 btn-without-border btn-no-hover",
                                                                      style: void 0,
                                                                      tabIndex: void 0,
                                                                      renderType: "link",
                                                                      role: "button",
                                                                      buttonClass: "btn-default",
                                                                      caption: selectTranslation([
                                                                        ExpressionProperty({
                                                                          "expression": { "expr": { "type": "literal", "value": "Test" }, "args": {} }
                                                                        })
                                                                      ]),
                                                                      tooltip: TextProperty({
                                                                        "value": selectTranslation([
                                                                          ""
                                                                        ])
                                                                      }),
                                                                      icon: WebIconProperty({
                                                                        "icon": { "type": "glyph", "iconClass": "glyphicon-play-circle" }
                                                                      }),
                                                                      action: ActionProperty({
                                                                        "action": { "type": "callMicroflow", "argMap": { "MistralConfiguration": { "widget": "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21", "source": "object" } }, "config": { "operationId": "1Qdr1voRL1WsNuw15TENLA", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                          key: "p.MistralConnector.Snippet_MistralConfigurations.container8",
                                                          $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.container8",
                                                          class: "mx-name-container8 popupmenu-custom-item-container spacing-outer-top-none spacing-outer-bottom-none",
                                                          style: void 0,
                                                          renderMode: "div",
                                                          onClick: void 0,
                                                          content: [
                                                            /* @__PURE__ */ React.createElement(
                                                              $ConditionalVisibilityWrapper,
                                                              {
                                                                key: "p.MistralConnector.Snippet_MistralConfigurations.actionButton12$visibility",
                                                                $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.actionButton12$visibility",
                                                                visible: ExpressionProperty({
                                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                }),
                                                                contents: [
                                                                  /* @__PURE__ */ React.createElement(
                                                                    $ActionButton,
                                                                    {
                                                                      key: "p.MistralConnector.Snippet_MistralConfigurations.actionButton12",
                                                                      $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.actionButton12",
                                                                      buttonId: "p.MistralConnector.Snippet_MistralConfigurations.actionButton12",
                                                                      class: "mx-name-actionButton12 btn-without-border btn-no-hover",
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
                                                                        "icon": { "type": "glyph", "iconClass": "glyphicon-trash" }
                                                                      }),
                                                                      action: ActionProperty({
                                                                        "action": { "type": "callMicroflow", "argMap": { "Configuration": { "widget": "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21", "source": "object" } }, "config": { "operationId": "a/rltKwOJF+2hp7/gjNIIA", "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure?"]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                position: "left",
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
                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                          })
                                        ]),
                                        "tooltip": selectTranslation([
                                          void 0
                                        ]),
                                        "filter": void 0,
                                        "visible": ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                        }),
                                        "sortable": false,
                                        "resizable": false,
                                        "draggable": false,
                                        "hidable": "no",
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
                                      "action": { "type": "callMicroflow", "argMap": { "MistralConfiguration": { "widget": "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21", "source": "object" } }, "config": { "operationId": "FwhZ5oM8ilWcEpoB3puu6g", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                      "abortOnServerValidation": false,
                                      "dataSourceId": "p.2",
                                      "argumentTypes": {}
                                    }),
                                    onSelectionChange: void 0,
                                    columnsSortable: true,
                                    columnsResizable: true,
                                    columnsDraggable: true,
                                    columnsHidable: true,
                                    configurationStorageType: "attribute",
                                    filtersPlaceholder: [
                                      /* @__PURE__ */ React.createElement(
                                        $DatagridTextFilter,
                                        {
                                          key: "p.MistralConnector.Snippet_MistralConfigurations.textFilter1",
                                          $widgetId: "p.MistralConnector.Snippet_MistralConfigurations.textFilter1",
                                          defaultValue: void 0,
                                          defaultFilter: "contains",
                                          placeholder: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          adjustable: true,
                                          delay: 500,
                                          onChange: void 0,
                                          screenReaderButtonCaption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          screenReaderInputCaption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          attrChoice: "linked",
                                          linkedDs: void 0,
                                          attributes: [
                                            {
                                              "attribute": AttributeMetaDataProperty({
                                                "path": "",
                                                "entity": "MistralConnector.MistralConfiguration",
                                                "attribute": "DisplayName",
                                                "attributeType": "String",
                                                "sortable": true,
                                                "filterable": true,
                                                "dataSourceId": "p.2",
                                                "isList": false
                                              })
                                            },
                                            {
                                              "attribute": AttributeMetaDataProperty({
                                                "path": "",
                                                "entity": "MistralConnector.MistralConfiguration",
                                                "attribute": "Endpoint",
                                                "attributeType": "String",
                                                "sortable": true,
                                                "filterable": true,
                                                "dataSourceId": "p.2",
                                                "isList": false
                                              })
                                            }
                                          ],
                                          class: "mx-name-textFilter1 spacing-outer-top spacing-outer-bottom",
                                          style: void 0,
                                          tabIndex: void 0
                                        }
                                      )
                                    ],
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
                                    class: "mx-name-dataGrid21 datagrid--no-scroll table-hover",
                                    style: void 0,
                                    tabIndex: void 0
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
      ],
      ariaHidden: false
    }
  )
]);
const title = selectTranslation([
  "Mistral Configuration"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_TopBar.Main": region$Main
};

export { classes, content, style, title };
