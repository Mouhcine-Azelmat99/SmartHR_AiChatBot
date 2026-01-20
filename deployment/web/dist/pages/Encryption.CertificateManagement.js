import { reactExports, asPluginWidgets, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-Cmtbu3ww.js';
import { ListAttributeProperty } from '../ListAttributeProperty-Dsd9EADd.js';
import { SelectionProperty } from '../SelectionProperty-BcgDtIUa.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { DatagridWidgetModule } from '../Datagrid-BLwkw0WZ.js';
import { Table, TableRow } from '../TableRow-dgCBfk93.js';
import { content as content$1 } from '../Encryption.ResponsiveLayout_Certificate-BXnQo9EU.js';
import '../UeptbR6O-BTpvn_SV.js';
import '../uEIG9e6s-BfLfin4i.js';
import '../CkBXggmw-DpOc9R4C.js';
import '../CTcC6PjV-DYXKqvux.js';
import '../CxoxYXlg-DglkwELR.js';
import '../CTQxk13g-Cpo2G8Em.js';
import '../index-BuuMIVCm.js';
import '../DerivedUniqueIdProperty-Bivq5vCz.js';
import '../WebIconProperty-MLEi2sc0.js';
import '../WebStaticImageProperty-C3LJYoNm.js';
import '../Label-CtWq-WVv.js';
import '../InlineText-D4EmJMFt.js';
import '../MenuBar-BOhekOWd.js';
import '../CGlz0zm4-DhbfSt7O.js';
import '../D7vCi_Rn-BKFLWyMt.js';
import '../ScrollContainer-U0HrQ4Hh.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const { $Table, $TableRow, $Datagrid, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Table, TableRow, Datagrid, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Table,
    {
      key: "p.Encryption.CertificateManagement.table1",
      $widgetId: "p.Encryption.CertificateManagement.table1",
      class: "mx-name-table1",
      style: void 0,
      autoWidth: false,
      columnWidths: [
        "100%"
      ],
      rows: [
        /* @__PURE__ */ React.createElement(
          $TableRow,
          {
            key: "p.Encryption.CertificateManagement.table1$row0",
            $widgetId: "p.Encryption.CertificateManagement.table1$row0",
            class: "",
            style: void 0,
            cells: [
              {
                "class": "",
                "content": [
                  /* @__PURE__ */ React.createElement(
                    $Datagrid,
                    {
                      key: "p.Encryption.CertificateManagement.dataGrid21",
                      $widgetId: "p.Encryption.CertificateManagement.dataGrid21",
                      datasource: DatabaseObjectListProperty({
                        "dataSourceId": "p.0",
                        "entity": "Encryption.PGPCertificate",
                        "operationId": "wz5vbBLr6VSZxJM4YXy63A",
                        "sort": []
                      }),
                      refreshInterval: 0,
                      itemSelection: SelectionProperty({
                        "selectionType": "Single",
                        "dataSourceId": "p.0"
                      }),
                      itemSelectionMethod: "rowClick",
                      showSelectAllToggle: true,
                      columns: [
                        {
                          "showContentAs": "attribute",
                          "attribute": ListAttributeProperty({
                            "path": "",
                            "entity": "Encryption.PGPCertificate",
                            "attribute": "Reference",
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
                          "header": selectTranslation([
                            ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": "Reference" }, "args": {} }
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
                          "width": "autoFill",
                          "minWidth": "auto",
                          "minWidthLimit": 100,
                          "size": 1,
                          "alignment": "left",
                          "wrapText": false,
                          "exportValue": selectTranslation([
                            void 0
                          ]),
                          "allowEventPropagation": true
                        },
                        {
                          "showContentAs": "attribute",
                          "attribute": ListAttributeProperty({
                            "path": "",
                            "entity": "Encryption.PGPCertificate",
                            "attribute": "EmailAddress",
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
                          "header": selectTranslation([
                            ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": "Email" }, "args": {} }
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
                          "width": "autoFill",
                          "minWidth": "auto",
                          "minWidthLimit": 100,
                          "size": 1,
                          "alignment": "left",
                          "wrapText": false,
                          "exportValue": selectTranslation([
                            void 0
                          ]),
                          "allowEventPropagation": true
                        },
                        {
                          "showContentAs": "attribute",
                          "attribute": ListAttributeProperty({
                            "path": "",
                            "entity": "Encryption.PGPCertificate",
                            "attribute": "CertificateType",
                            "attributeType": "Enum",
                            "sortable": true,
                            "filterable": true,
                            "dataSourceId": "p.0",
                            "isList": false
                          }),
                          "content": void 0,
                          "dynamicText": selectTranslation([
                            void 0
                          ]),
                          "header": selectTranslation([
                            ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": "Certificate Type" }, "args": {} }
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
                          "width": "autoFill",
                          "minWidth": "auto",
                          "minWidthLimit": 100,
                          "size": 1,
                          "alignment": "left",
                          "wrapText": false,
                          "exportValue": selectTranslation([
                            void 0
                          ]),
                          "allowEventPropagation": true
                        },
                        {
                          "showContentAs": "attribute",
                          "attribute": ListAttributeProperty({
                            "path": "",
                            "entity": "Encryption.PGPCertificate",
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
                          "width": "autoFill",
                          "minWidth": "auto",
                          "minWidthLimit": 100,
                          "size": 1,
                          "alignment": "left",
                          "wrapText": false,
                          "exportValue": selectTranslation([
                            void 0
                          ]),
                          "allowEventPropagation": true
                        }
                      ],
                      columnsFilterable: true,
                      pageSize: 20,
                      pagination: "buttons",
                      pagingPosition: "bottom",
                      showPagingButtons: "always",
                      showEmptyPlaceholder: "none",
                      emptyPlaceholder: void 0,
                      rowClass: void 0,
                      onClickTrigger: "single",
                      onClick: void 0,
                      onSelectionChange: void 0,
                      columnsSortable: true,
                      columnsResizable: true,
                      columnsDraggable: true,
                      columnsHidable: true,
                      filtersPlaceholder: [
                        /* @__PURE__ */ React.createElement(
                          $ConditionalVisibilityWrapper,
                          {
                            key: "p.Encryption.CertificateManagement.actionButton5$visibility",
                            $widgetId: "p.Encryption.CertificateManagement.actionButton5$visibility",
                            visible: ExpressionProperty({
                              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                            }),
                            contents: [
                              /* @__PURE__ */ React.createElement(
                                $ActionButton,
                                {
                                  key: "p.Encryption.CertificateManagement.actionButton5",
                                  $widgetId: "p.Encryption.CertificateManagement.actionButton5",
                                  buttonId: "p.Encryption.CertificateManagement.actionButton5",
                                  class: "mx-name-actionButton5",
                                  style: void 0,
                                  tabIndex: void 0,
                                  renderType: "button",
                                  role: void 0,
                                  buttonClass: "btn-default",
                                  caption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Generate Key Ring Pair" }, "args": {} }
                                    })
                                  ]),
                                  tooltip: TextProperty({
                                    "value": selectTranslation([
                                      ""
                                    ])
                                  }),
                                  icon: void 0,
                                  action: ActionProperty({
                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "HNrLYlZyRVq7M/V9o3SMUw", "validate": "view", "allowedRoles": [] }, "disabledDuringExecution": true },
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
                            key: "p.Encryption.CertificateManagement.actionButton6$visibility",
                            $widgetId: "p.Encryption.CertificateManagement.actionButton6$visibility",
                            visible: ExpressionProperty({
                              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                            }),
                            contents: [
                              /* @__PURE__ */ React.createElement(
                                $ActionButton,
                                {
                                  key: "p.Encryption.CertificateManagement.actionButton6",
                                  $widgetId: "p.Encryption.CertificateManagement.actionButton6",
                                  buttonId: "p.Encryption.CertificateManagement.actionButton6",
                                  class: "mx-name-actionButton6",
                                  style: void 0,
                                  tabIndex: void 0,
                                  renderType: "button",
                                  role: void 0,
                                  buttonClass: "btn-default",
                                  caption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Upload Public Key Ring" }, "args": {} }
                                    })
                                  ]),
                                  tooltip: TextProperty({
                                    "value": selectTranslation([
                                      ""
                                    ])
                                  }),
                                  icon: void 0,
                                  action: ActionProperty({
                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "hc30jjsWbF+5AV7TO8DI8A", "validate": "view", "allowedRoles": [] }, "disabledDuringExecution": true },
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
                            key: "p.Encryption.CertificateManagement.actionButton7$visibility",
                            $widgetId: "p.Encryption.CertificateManagement.actionButton7$visibility",
                            visible: ExpressionProperty({
                              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                            }),
                            contents: [
                              /* @__PURE__ */ React.createElement(
                                $ActionButton,
                                {
                                  key: "p.Encryption.CertificateManagement.actionButton7",
                                  $widgetId: "p.Encryption.CertificateManagement.actionButton7",
                                  buttonId: "p.Encryption.CertificateManagement.actionButton7",
                                  class: "mx-name-actionButton7",
                                  style: void 0,
                                  tabIndex: void 0,
                                  renderType: "button",
                                  role: void 0,
                                  buttonClass: "btn-default",
                                  caption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Upload Private Key Ring" }, "args": {} }
                                    })
                                  ]),
                                  tooltip: TextProperty({
                                    "value": selectTranslation([
                                      ""
                                    ])
                                  }),
                                  icon: void 0,
                                  action: ActionProperty({
                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "bSWlnYSZRFCH+wiL8itk0w", "validate": "view", "allowedRoles": [] }, "disabledDuringExecution": true },
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
                            key: "p.Encryption.CertificateManagement.actionButton8$visibility",
                            $widgetId: "p.Encryption.CertificateManagement.actionButton8$visibility",
                            visible: ExpressionProperty({
                              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                            }),
                            contents: [
                              /* @__PURE__ */ React.createElement(
                                $ActionButton,
                                {
                                  key: "p.Encryption.CertificateManagement.actionButton8",
                                  $widgetId: "p.Encryption.CertificateManagement.actionButton8",
                                  buttonId: "p.Encryption.CertificateManagement.actionButton8",
                                  class: "mx-name-actionButton8",
                                  style: void 0,
                                  tabIndex: void 0,
                                  renderType: "button",
                                  role: void 0,
                                  buttonClass: "btn-default",
                                  caption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Edit [default]" }, "args": {} }
                                    })
                                  ]),
                                  tooltip: TextProperty({
                                    "value": selectTranslation([
                                      ""
                                    ])
                                  }),
                                  icon: void 0,
                                  action: ActionProperty({
                                    "action": { "type": "callMicroflow", "argMap": { "Certificate": { "widget": "p.Encryption.CertificateManagement.dataGrid21", "source": "selection" } }, "config": { "operationId": "rHDw7PSIOFSEQqXNEQnlmw", "validate": "view", "allowedRoles": [] }, "disabledDuringExecution": true },
                                    "abortOnServerValidation": true
                                  })
                                }
                              )
                            ]
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
                      itemSelectionMode: "clear",
                      enableSelectAll: false,
                      keepSelection: false,
                      selectionCounterPosition: "bottom",
                      loadingType: "spinner",
                      refreshIndicator: false,
                      showNumberOfRows: false,
                      loadMoreButtonCaption: selectTranslation([
                        ExpressionProperty({
                          "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                        })
                      ]),
                      configurationStorageType: "attribute",
                      storeFiltersInPersonalization: true,
                      selectAllRowsLabel: selectTranslation([
                        ExpressionProperty({
                          "expression": { "expr": { "type": "literal", "value": "Select all rows" }, "args": {} }
                        })
                      ]),
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
                      selectedCountTemplateSingular: selectTranslation([
                        ExpressionProperty({
                          "expression": { "expr": { "type": "literal", "value": "%d row selected" }, "args": {} }
                        })
                      ]),
                      selectedCountTemplatePlural: selectTranslation([
                        ExpressionProperty({
                          "expression": { "expr": { "type": "literal", "value": "%d rows selected" }, "args": {} }
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
                ]
              }
            ]
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Certificate administration"
]);
const classes = "";
const style = {};
const content = {
  ...content$1,
  "Encryption.ResponsiveLayout_Certificate.Main": region$Main
};

export { classes, content, style, title };
