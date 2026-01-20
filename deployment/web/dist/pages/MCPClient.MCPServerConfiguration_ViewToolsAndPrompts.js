import { reactExports, asPluginWidgets, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { AssociationObjectListProperty } from '../AssociationObjectListProperty-Bq1c4uSS.js';
import { ListAttributeProperty } from '../ListAttributeProperty-Dsd9EADd.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-V0FBuqFr.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { DatagridWidgetModule } from '../Datagrid-BLwkw0WZ.js';
import { DatagridTextFilterWidgetModule } from '../DatagridTextFilter-whGFncRM.js';
import { Div } from '../Div-DznaFJxI.js';
import { ListView } from '../ListView-hken1fZ0.js';
import { TabContainer } from '../TabContainer-BOkXD8P8.js';
import { Text } from '../Text-mON8QAZM.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-CdvE1MzX.js';
import '../BMuJrVqQ-CCtMHjkn.js';
import '../CxMFexew-Djrc9cTX.js';
import '../UeptbR6O-BTpvn_SV.js';
import '../uEIG9e6s-BfLfin4i.js';
import '../CkBXggmw-DpOc9R4C.js';
import '../CTcC6PjV-DYXKqvux.js';
import '../CxoxYXlg-DglkwELR.js';
import '../CTQxk13g-Cpo2G8Em.js';
import '../index-BuuMIVCm.js';
import '../bdxqAC6d-DXeZKQMd.js';
import '../D7vCi_Rn-BKFLWyMt.js';
import '../D2Vzasyw-Cik4kBEJ.js';
import '../InlineText-D4EmJMFt.js';
import '../ScrollContainer-U0HrQ4Hh.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Div, $TabContainer, $Datagrid, $DatagridTextFilter, $ListView, $Text } = asPluginWidgets({ Div, TabContainer, Datagrid, DatagridTextFilter, ListView, Text });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.layoutGrid1",
      $widgetId: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.layoutGrid1$row0",
            $widgetId: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.layoutGrid1$row0$column0",
                  $widgetId: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $TabContainer,
                      {
                        key: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.tabContainer1",
                        $widgetId: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.tabContainer1",
                        class: "mx-name-tabContainer1",
                        style: void 0,
                        tabIndex: void 0,
                        widgetId: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.tabContainer1",
                        defaultTab: 0,
                        tabs: [
                          {
                            "name": "tabPage1",
                            "caption": TextProperty({
                              "value": selectTranslation([
                                "Tools"
                              ])
                            }),
                            "isDelayed": false,
                            "refreshOnShow": false,
                            "content": [
                              /* @__PURE__ */ React.createElement(
                                $Datagrid,
                                {
                                  key: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.dataGrid2_1",
                                  $widgetId: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.dataGrid2_1",
                                  datasource: AssociationObjectListProperty({
                                    "dataSourceId": "p.2",
                                    "entity": "MCPClient.Tool",
                                    "scope": "$ListToolsResult",
                                    "operationId": "AgPBkdQ9K1+TAkXhB3tb0Q"
                                  }),
                                  refreshInterval: 0,
                                  itemSelectionMethod: "checkbox",
                                  itemSelectionMode: "clear",
                                  showSelectAllToggle: true,
                                  loadingType: "spinner",
                                  columns: [
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "MCPClient.Tool",
                                        "attribute": "Name",
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
                                          "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridTextFilter,
                                          {
                                            key: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.textFilter1",
                                            $widgetId: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.textFilter1",
                                            attrChoice: "auto",
                                            linkedDs: void 0,
                                            attributes: [],
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
                                                "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                              })
                                            ]),
                                            class: "mx-name-textFilter1",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
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
                                        "entity": "MCPClient.Tool",
                                        "attribute": "Description",
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
                                          "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridTextFilter,
                                          {
                                            key: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.textFilter2",
                                            $widgetId: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.textFilter2",
                                            attrChoice: "auto",
                                            linkedDs: void 0,
                                            attributes: [],
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
                                                "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                              })
                                            ]),
                                            class: "mx-name-textFilter2",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
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
                                        "entity": "MCPClient.Tool",
                                        "attribute": "Name",
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
                                              key: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.listView1",
                                              $widgetId: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.listView1",
                                              class: "mx-name-listView1 argument-listview",
                                              style: void 0,
                                              listValue: AssociationObjectListProperty({
                                                "dataSourceId": "p.3",
                                                "entity": "MCPClient.ToolArgument",
                                                "scope": "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.dataGrid2_1",
                                                "operationId": "F+qatz1MdlWSLRcNrkSINQ"
                                              }),
                                              itemTemplate: TemplatedWidgetProperty({
                                                "dataSourceId": "p.3",
                                                "editable": false,
                                                "children": () => [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.text1",
                                                      $widgetId: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.text1",
                                                      class: "mx-name-text1",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Name" }, { "type": "literal", "value": " (" }] }, { "type": "variable", "variable": "currentObject", "path": "_Type" }] }, { "type": "literal", "value": ")" }] }, "args": { "currentObject": { "widget": "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.listView1", "source": "object" } } }
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
                                          "expression": { "expr": { "type": "literal", "value": "Arguments" }, "args": {} }
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
                                  showPagingButtons: "always",
                                  showNumberOfRows: false,
                                  pagingPosition: "bottom",
                                  loadMoreButtonCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                    })
                                  ]),
                                  showEmptyPlaceholder: "none",
                                  emptyPlaceholder: void 0,
                                  rowClass: void 0,
                                  onClickTrigger: "single",
                                  onClick: void 0,
                                  onSelectionChange: void 0,
                                  filtersPlaceholder: void 0,
                                  columnsSortable: true,
                                  columnsResizable: true,
                                  columnsDraggable: true,
                                  columnsHidable: true,
                                  configurationStorageType: "attribute",
                                  storeFiltersInPersonalization: true,
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
                                  class: "mx-name-dataGrid2_1 table-compact",
                                  style: void 0,
                                  tabIndex: void 0
                                }
                              )
                            ]
                          },
                          {
                            "name": "tabPage2",
                            "caption": TextProperty({
                              "value": selectTranslation([
                                "Prompts"
                              ])
                            }),
                            "isDelayed": false,
                            "refreshOnShow": false,
                            "content": [
                              /* @__PURE__ */ React.createElement(
                                $Datagrid,
                                {
                                  key: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.dataGrid2_2",
                                  $widgetId: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.dataGrid2_2",
                                  datasource: AssociationObjectListProperty({
                                    "dataSourceId": "p.4",
                                    "entity": "MCPClient.Prompt",
                                    "scope": "$ListPromptsResult",
                                    "operationId": "sO9OEkCzzFGUzucmntgOAg"
                                  }),
                                  refreshInterval: 0,
                                  itemSelectionMethod: "checkbox",
                                  itemSelectionMode: "clear",
                                  showSelectAllToggle: true,
                                  loadingType: "spinner",
                                  columns: [
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "MCPClient.Prompt",
                                        "attribute": "Name",
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
                                          "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridTextFilter,
                                          {
                                            key: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.textFilter3",
                                            $widgetId: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.textFilter3",
                                            attrChoice: "auto",
                                            linkedDs: void 0,
                                            attributes: [],
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
                                                "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                              })
                                            ]),
                                            class: "mx-name-textFilter3",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
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
                                        "entity": "MCPClient.Prompt",
                                        "attribute": "Description",
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
                                          "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridTextFilter,
                                          {
                                            key: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.textFilter4",
                                            $widgetId: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.textFilter4",
                                            attrChoice: "auto",
                                            linkedDs: void 0,
                                            attributes: [],
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
                                                "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                              })
                                            ]),
                                            class: "mx-name-textFilter4",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
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
                                        "entity": "MCPClient.Prompt",
                                        "attribute": "Name",
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
                                            $ListView,
                                            {
                                              key: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.listView2",
                                              $widgetId: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.listView2",
                                              class: "mx-name-listView2 argument-listview",
                                              style: void 0,
                                              listValue: AssociationObjectListProperty({
                                                "dataSourceId": "p.5",
                                                "entity": "MCPClient.PromptArgument",
                                                "scope": "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.dataGrid2_2",
                                                "operationId": "+6RFTD/pNlq+7Q9F0Om8EA"
                                              }),
                                              itemTemplate: TemplatedWidgetProperty({
                                                "dataSourceId": "p.5",
                                                "editable": false,
                                                "children": () => [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.text2",
                                                      $widgetId: "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.text2",
                                                      class: "mx-name-text2",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.listView2", "source": "object" } } }
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
                                          "expression": { "expr": { "type": "literal", "value": "Arguments" }, "args": {} }
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
                                  showPagingButtons: "always",
                                  showNumberOfRows: false,
                                  pagingPosition: "bottom",
                                  loadMoreButtonCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                    })
                                  ]),
                                  showEmptyPlaceholder: "none",
                                  emptyPlaceholder: void 0,
                                  rowClass: void 0,
                                  onClickTrigger: "single",
                                  onClick: void 0,
                                  onSelectionChange: void 0,
                                  filtersPlaceholder: void 0,
                                  columnsSortable: true,
                                  columnsResizable: true,
                                  columnsDraggable: true,
                                  columnsHidable: true,
                                  configurationStorageType: "attribute",
                                  storeFiltersInPersonalization: true,
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
                                  class: "mx-name-dataGrid2_2 table-compact",
                                  style: void 0,
                                  tabIndex: void 0
                                }
                              )
                            ]
                          }
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
  "View MCP server tools and prompts"
]);
const classes = "";
const cancelChangesOperationId = "ESemGQS0klKV3+Nomfqc7g";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
