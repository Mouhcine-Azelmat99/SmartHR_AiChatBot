import { reactExports, asPluginWidgets, selectTranslation } from '../index-B-pQLZz2.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C1uYYDJ5.js';
import { ActionButton, ActionProperty } from '../ActionButton-C47bDiwH.js';
import { AssociationObjectListProperty } from '../AssociationObjectListProperty-HKkAiyBV.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BrlLyOx6.js';
import { ListAttributeProperty, AttributeMetaDataProperty } from '../ListAttributeProperty-CJPrRUfN.js';
import { ListActionProperty } from '../ListActionProperty-CTAwa0C2.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-viDAZSOp.js';
import { TextProperty } from '../TextProperty-ukMsrrP8.js';
import { WebIconProperty } from '../WebIconProperty-B4eQIHHv.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C-2xhd5O.js';
import { Container } from '../Container-CTbE-yQS.js';
import { DatagridWidgetModule } from '../Datagrid-BYP0BNeL.js';
import { DatagridTextFilterWidgetModule } from '../DatagridTextFilter-CMo3F3oP.js';
import { DataView } from '../DataView-DtIsQy7l.js';
import { Div } from '../Div-C2k8MuH7.js';
import { ListView } from '../ListView-CtnOFRNF.js';
import { Text } from '../Text-5NmEA291.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-D5lHkh-a.js';
import '../BMuJrVqQ-C_cqhczO.js';
import '../CxMFexew-C1GWnP8G.js';
import '../UeptbR6O-9Cnv5Sxb.js';
import '../uEIG9e6s-CoI72Q4o.js';
import '../CkBXggmw-CEa7-Kz-.js';
import '../CTcC6PjV-CLE6jBCq.js';
import '../CxoxYXlg-rXnL4f6K.js';
import '../CTQxk13g-BDTc581w.js';
import '../index-CgEeXS6W.js';
import '../bdxqAC6d-ISZWqfJE.js';
import '../InlineText-CcVi-f0x.js';
import '../ScrollContainer-B-pXvHDA.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Div, $DataView, $ConditionalVisibilityWrapper, $ActionButton, $Container, $Text, $Datagrid, $ListView, $DatagridTextFilter } = asPluginWidgets({ Div, DataView, ConditionalVisibilityWrapper, ActionButton, Container, Text, Datagrid, ListView, DatagridTextFilter });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MistralConnector.MistralDeployedModel_Overview.layoutGrid1",
      $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MistralConnector.MistralDeployedModel_Overview.layoutGrid1$row0",
            $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MistralConnector.MistralDeployedModel_Overview.layoutGrid1$row0$column0",
                  $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.MistralConnector.MistralDeployedModel_Overview.dataView1",
                        $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.dataView1",
                        class: "mx-name-dataView1 form-horizontal",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.20",
                          "scope": "$MistralConfiguration",
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
                              key: "p.MistralConnector.MistralDeployedModel_Overview.actionButton3$visibility",
                              $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.actionButton3$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.MistralConnector.MistralDeployedModel_Overview.actionButton3",
                                    $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.actionButton3",
                                    buttonId: "p.MistralConnector.MistralDeployedModel_Overview.actionButton3",
                                    class: "mx-name-actionButton3 spacing-outer-right spacing-outer-bottom",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-default",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Add new model" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "MistralConfiguration": { "widget": "$MistralConfiguration", "source": "object" } }, "config": { "operationId": "EnmWdqkWmVyAgAxQ/RFy9A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                              key: "p.MistralConnector.MistralDeployedModel_Overview.actionButton5$visibility",
                              $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.actionButton5$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.MistralConnector.MistralDeployedModel_Overview.actionButton5",
                                    $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.actionButton5",
                                    buttonId: "p.MistralConnector.MistralDeployedModel_Overview.actionButton5",
                                    class: "mx-name-actionButton5 spacing-outer-bottom",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-default",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Sync latest models via API" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "MistralConfiguration": { "widget": "$MistralConfiguration", "source": "object" } }, "config": { "operationId": "X4kk8+FfBFOmhpTofPZrqA", "progress": { "message": selectTranslation([""]), "modal": true }, "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure? This action will delete all deployed models currently added to this configuration."]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.MistralConnector.MistralDeployedModel_Overview.container6",
                              $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.container6",
                              class: "mx-name-container6 alert alert-primary spacing-inner-top-medium spacing-inner-bottom-medium spacing-inner-left-medium spacing-inner-right-medium",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p.MistralConnector.MistralDeployedModel_Overview.layoutGrid2",
                                    $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.layoutGrid2",
                                    class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.MistralConnector.MistralDeployedModel_Overview.layoutGrid2$row0",
                                          $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.layoutGrid2$row0",
                                          class: "row",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.MistralConnector.MistralDeployedModel_Overview.layoutGrid2$row0$column0",
                                                $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.layoutGrid2$row0$column0",
                                                class: "col-lg-auto col-md-auto col-auto align-self-start",
                                                style: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.MistralConnector.MistralDeployedModel_Overview.container2",
                                                      $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.container2",
                                                      class: "mx-name-container2 alert-icon mx-icon mx-icon-filled mx-icon-info-circle",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: void 0,
                                                      ariaHidden: false
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.MistralConnector.MistralDeployedModel_Overview.layoutGrid2$row0$column1",
                                                $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.layoutGrid2$row0$column1",
                                                class: "col-lg col-md col align-self-center",
                                                style: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.MistralConnector.MistralDeployedModel_Overview.text27",
                                                      $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.text27",
                                                      class: "mx-name-text27 alert-title text-bold spacing-outer-bottom-none",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Disclaimer: Sync latest models via API" }, "args": {} }
                                                        })
                                                      ]),
                                                      renderMode: "h5"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.MistralConnector.MistralDeployedModel_Overview.text30",
                                                      $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.text30",
                                                      class: "mx-name-text30 alert-description spacing-outer-bottom-none",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "When models are synced with this button, only the latest versions according to their timestamp are added and a hardcoded filter is applied to only return models supporting chat completions (without reasoning) and embeddings. It is also possible to add models manually with the 'new' button and to edit created models." }, "args": {} }
                                                        })
                                                      ]),
                                                      renderMode: "p"
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
                            $Datagrid,
                            {
                              key: "p.MistralConnector.MistralDeployedModel_Overview.dataGrid21",
                              $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.dataGrid21",
                              datasource: AssociationObjectListProperty({
                                "dataSourceId": "p.4",
                                "entity": "MistralConnector.MistralDeployedModel",
                                "scope": "$MistralConfiguration",
                                "operationId": "LBz/f8R5OliHJJ0dVtn6cg"
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
                                    "entity": "MistralConnector.MistralDeployedModel",
                                    "attribute": "DisplayName",
                                    "attributeType": "String",
                                    "sortable": true,
                                    "filterable": true,
                                    "dataSourceId": "p.4",
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
                                    "entity": "MistralConnector.MistralDeployedModel",
                                    "attribute": "Model",
                                    "attributeType": "String",
                                    "sortable": true,
                                    "filterable": true,
                                    "dataSourceId": "p.4",
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
                                      "expression": { "expr": { "type": "literal", "value": "Model" }, "args": {} }
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
                                    "entity": "MistralConnector.MistralDeployedModel",
                                    "attribute": "OutputModality",
                                    "attributeType": "Enum",
                                    "sortable": true,
                                    "filterable": true,
                                    "dataSourceId": "p.4",
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
                                      "expression": { "expr": { "type": "literal", "value": "Output modality" }, "args": {} }
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
                                  "content": TemplatedWidgetProperty({
                                    "dataSourceId": "p.4",
                                    "editable": false,
                                    "children": () => [
                                      /* @__PURE__ */ React.createElement(
                                        $ListView,
                                        {
                                          key: "p.MistralConnector.MistralDeployedModel_Overview.listView1",
                                          $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.listView1",
                                          class: "mx-name-listView1 listview-horizontal listview-hide-on-empty listview-stylingless listview-sm",
                                          style: void 0,
                                          listValue: AssociationObjectListProperty({
                                            "dataSourceId": "p.5",
                                            "entity": "GenAICommons.InputModality",
                                            "scope": "p.MistralConnector.MistralDeployedModel_Overview.dataGrid21",
                                            "operationId": "tnPHLcT2ZVuKX7LiWvTvGg",
                                            "directPath": "GenAICommons.DeployedModel_InputModality/GenAICommons.InputModality"
                                          }),
                                          itemTemplate: TemplatedWidgetProperty({
                                            "dataSourceId": "p.5",
                                            "editable": false,
                                            "children": () => [
                                              /* @__PURE__ */ React.createElement(
                                                $Text,
                                                {
                                                  key: "p.MistralConnector.MistralDeployedModel_Overview.text2",
                                                  $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.text2",
                                                  class: "mx-name-text2",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ModelModality" }, { "type": "literal", "value": "GenAICommons.ENUM_ModelModality" }] }, "args": { "currentObject": { "widget": "p.MistralConnector.MistralDeployedModel_Overview.listView1", "source": "object" } } }
                                                    })
                                                  ]),
                                                  renderMode: "span"
                                                }
                                              )
                                            ]
                                          }),
                                          onClick: void 0,
                                          pageSize: 10
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
                                      "expression": { "expr": { "type": "literal", "value": "Input modalities" }, "args": {} }
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
                                    "entity": "MistralConnector.MistralDeployedModel",
                                    "attribute": "IsActive",
                                    "attributeType": "Boolean",
                                    "sortable": true,
                                    "filterable": true,
                                    "dataSourceId": "p.4",
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
                                      "expression": { "expr": { "type": "literal", "value": "Active" }, "args": {} }
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
                                    "entity": "MistralConnector.MistralDeployedModel",
                                    "attribute": "DisplayName",
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
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.MistralConnector.MistralDeployedModel_Overview.actionButton2$visibility",
                                          $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.actionButton2$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.MistralConnector.MistralDeployedModel_Overview.actionButton2",
                                                $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.actionButton2",
                                                buttonId: "p.MistralConnector.MistralDeployedModel_Overview.actionButton2",
                                                class: "mx-name-actionButton2 spacing-outer-right",
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
                                                    "Edit"
                                                  ])
                                                }),
                                                icon: WebIconProperty({
                                                  "icon": { "type": "glyph", "iconClass": "glyphicon-pencil" }
                                                }),
                                                action: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": { "OpenAIDeployedModel": { "widget": "p.MistralConnector.MistralDeployedModel_Overview.dataGrid21", "source": "object" } }, "config": { "operationId": "Bnw83YOVrluycoiRjPKeGg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                          key: "p.MistralConnector.MistralDeployedModel_Overview.actionButton4$visibility",
                                          $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.actionButton4$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.MistralConnector.MistralDeployedModel_Overview.actionButton4",
                                                $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.actionButton4",
                                                buttonId: "p.MistralConnector.MistralDeployedModel_Overview.actionButton4",
                                                class: "mx-name-actionButton4",
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
                                                    "Delete"
                                                  ])
                                                }),
                                                icon: WebIconProperty({
                                                  "icon": { "type": "glyph", "iconClass": "glyphicon-trash" }
                                                }),
                                                action: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": { "OpenAIDeployedModel": { "widget": "p.MistralConnector.MistralDeployedModel_Overview.dataGrid21", "source": "object" } }, "config": { "operationId": "mkq5NuJKfle+RBZtMw9Bug", "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure?"]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                  "abortOnServerValidation": true
                                                })
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
                                "action": { "type": "callMicroflow", "argMap": { "MistralDeployedModel": { "widget": "p.MistralConnector.MistralDeployedModel_Overview.dataGrid21", "source": "object" } }, "config": { "operationId": "eHqiPlYKC12boJGb7UbbFQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                "abortOnServerValidation": false,
                                "dataSourceId": "p.4",
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
                                    key: "p.MistralConnector.MistralDeployedModel_Overview.textFilter1",
                                    $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.textFilter1",
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
                                          "entity": "MistralConnector.MistralDeployedModel",
                                          "attribute": "DisplayName",
                                          "attributeType": "String",
                                          "sortable": true,
                                          "filterable": true,
                                          "dataSourceId": "p.4",
                                          "isList": false
                                        })
                                      },
                                      {
                                        "attribute": AttributeMetaDataProperty({
                                          "path": "",
                                          "entity": "MistralConnector.MistralDeployedModel",
                                          "attribute": "Model",
                                          "attributeType": "String",
                                          "sortable": true,
                                          "filterable": true,
                                          "dataSourceId": "p.4",
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
                              class: "mx-name-dataGrid21",
                              style: void 0,
                              tabIndex: void 0
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MistralConnector.MistralDeployedModel_Overview.actionButton1",
                              $widgetId: "p.MistralConnector.MistralDeployedModel_Overview.actionButton1",
                              buttonId: "p.MistralConnector.MistralDeployedModel_Overview.actionButton1",
                              class: "mx-name-actionButton1",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Close" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "closePage", "argMap": {}, "config": {}, "disabledDuringExecution": true },
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
  "Manage Deployed Models"
]);
const classes = "";
const cancelChangesOperationId = "mRr7EIAIxVWdNcWFyddevQ";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
