import { reactExports, asPluginWidgets, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { AssociationObjectListProperty } from '../AssociationObjectListProperty-EcNik3ti.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-iFOPmzlY.js';
import { ListAttributeProperty, AttributeMetaDataProperty } from '../ListAttributeProperty-dWq-nfHX.js';
import { ListActionProperty } from '../ListActionProperty-CSktymVx.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-CgBaKmKA.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { WebIconProperty } from '../WebIconProperty-I8EGGvK6.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BilSZaU4.js';
import { DatagridWidgetModule } from '../Datagrid-CPOmkQcC.js';
import { DatagridTextFilterWidgetModule } from '../DatagridTextFilter-CNeyl2wT.js';
import { DataView } from '../DataView-RrZIPNzV.js';
import { Div } from '../Div-DnhZCXw4.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-B5WEKHCX.js';
import '../BMuJrVqQ-CWJgr9IB.js';
import '../CxMFexew-CFDhnrRu.js';
import '../UeptbR6O-Dse5KB9T.js';
import '../uEIG9e6s-VBk3qU43.js';
import '../CkBXggmw-D1iecObi.js';
import '../CTcC6PjV-eX91G0mv.js';
import '../CxoxYXlg-BJ3P5g_E.js';
import '../CTQxk13g-CU8g3epp.js';
import '../index-BP8nYpIk.js';
import '../bdxqAC6d-BooPaEdW.js';
import '../ScrollContainer-DO1bE89X.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Div, $DataView, $Datagrid, $ConditionalVisibilityWrapper, $ActionButton, $DatagridTextFilter } = asPluginWidgets({ Div, DataView, Datagrid, ConditionalVisibilityWrapper, ActionButton, DatagridTextFilter });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.layoutGrid1",
      $widgetId: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.layoutGrid1$row0",
            $widgetId: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.layoutGrid1$row0$column0",
                  $widgetId: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.dataView1",
                        $widgetId: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.dataView1",
                        class: "mx-name-dataView1 form-horizontal",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.15",
                          "scope": "$AzureAISearchResource",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $Datagrid,
                            {
                              key: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.dataGrid21",
                              $widgetId: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.dataGrid21",
                              datasource: AssociationObjectListProperty({
                                "dataSourceId": "p.0",
                                "entity": "OpenAIConnector.Index",
                                "scope": "$AzureAISearchResource",
                                "operationId": "mJXiEQWk3Vqil7hA2sf6rQ"
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
                                    "entity": "OpenAIConnector.Index",
                                    "attribute": "DisplayName",
                                    "attributeType": "String",
                                    "sortable": true,
                                    "filterable": true,
                                    "dataSourceId": "p.0",
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
                                    "entity": "OpenAIConnector.Index",
                                    "attribute": "Name",
                                    "attributeType": "String",
                                    "sortable": true,
                                    "filterable": true,
                                    "dataSourceId": "p.0",
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
                                      "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
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
                                    "entity": "OpenAIConnector.Index",
                                    "attribute": "IsActive",
                                    "attributeType": "Boolean",
                                    "sortable": true,
                                    "filterable": true,
                                    "dataSourceId": "p.0",
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
                                      "expression": { "expr": { "type": "literal", "value": "Is active" }, "args": {} }
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
                                    "entity": "OpenAIConnector.Index",
                                    "attribute": "DisplayName",
                                    "attributeType": "String",
                                    "sortable": true,
                                    "filterable": true,
                                    "dataSourceId": "p.0",
                                    "isList": false
                                  }),
                                  "content": TemplatedWidgetProperty({
                                    "dataSourceId": "p.0",
                                    "editable": false,
                                    "children": () => [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton4$visibility",
                                          $widgetId: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton4$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton4",
                                                $widgetId: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton4",
                                                buttonId: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton4",
                                                class: "mx-name-actionButton4 spacing-outer-right",
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
                                                  "action": { "type": "openPage", "argMap": { "param$Index": { "widget": "p.OpenAIConnector.AzureAISearchResource_Index_Overview.dataGrid21", "source": "object" } }, "config": { "name": "OpenAIConnector/Index_Edit.page.xml", "location": "modal", "width": 1200, "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                          key: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton5$visibility",
                                          $widgetId: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton5$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton5",
                                                $widgetId: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton5",
                                                buttonId: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton5",
                                                class: "mx-name-actionButton5",
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
                                                  "action": { "type": "callMicroflow", "argMap": { "Index": { "widget": "p.OpenAIConnector.AzureAISearchResource_Index_Overview.dataGrid21", "source": "object" } }, "config": { "operationId": "gygQsx6VXl2rA6TORCMTtg", "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure?"]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                  "resizable": true,
                                  "draggable": true,
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
                              onClickTrigger: "double",
                              onClick: ListActionProperty({
                                "action": { "type": "openPage", "argMap": { "param$Index": { "widget": "p.OpenAIConnector.AzureAISearchResource_Index_Overview.dataGrid21", "source": "object" } }, "config": { "name": "OpenAIConnector/Index_Edit.page.xml", "location": "modal", "width": 1200, "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                "abortOnServerValidation": false,
                                "dataSourceId": "p.0",
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
                                    key: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.textFilter1",
                                    $widgetId: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.textFilter1",
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
                                          "entity": "OpenAIConnector.Index",
                                          "attribute": "DisplayName",
                                          "attributeType": "String",
                                          "sortable": true,
                                          "filterable": true,
                                          "dataSourceId": "p.0",
                                          "isList": false
                                        })
                                      },
                                      {
                                        "attribute": AttributeMetaDataProperty({
                                          "path": "",
                                          "entity": "OpenAIConnector.Index",
                                          "attribute": "Name",
                                          "attributeType": "String",
                                          "sortable": true,
                                          "filterable": true,
                                          "dataSourceId": "p.0",
                                          "isList": false
                                        })
                                      }
                                    ],
                                    class: "mx-name-textFilter1",
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
                              key: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton1",
                              $widgetId: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton1",
                              buttonId: "p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton1",
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
  "Manage Indexes"
]);
const classes = "";
const cancelChangesOperationId = "yptuPQzlili8CnNZ9A7Ogg";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
