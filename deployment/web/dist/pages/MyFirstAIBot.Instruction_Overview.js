import { reactExports, asPluginWidgets, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-Cmtbu3ww.js';
import { ListActionProperty } from '../ListActionProperty-CnTTvC2T.js';
import { ListAttributeProperty } from '../ListAttributeProperty-Dsd9EADd.js';
import { SelectionProperty } from '../SelectionProperty-BcgDtIUa.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { Container } from '../Container-LyamVXag.js';
import { DatagridWidgetModule } from '../Datagrid-BLwkw0WZ.js';
import { DatagridTextFilterWidgetModule } from '../DatagridTextFilter-whGFncRM.js';
import { Div } from '../Div-DznaFJxI.js';
import { Text } from '../Text-mON8QAZM.js';
import { content as content$1 } from '../Atlas_Core.Atlas_TopBar-CKgSzJ5B.js';
import '../UeptbR6O-BTpvn_SV.js';
import '../uEIG9e6s-BfLfin4i.js';
import '../CkBXggmw-DpOc9R4C.js';
import '../CTcC6PjV-DYXKqvux.js';
import '../CxoxYXlg-DglkwELR.js';
import '../CTQxk13g-Cpo2G8Em.js';
import '../index-BuuMIVCm.js';
import '../InlineText-D4EmJMFt.js';
import '../ListExpressionProperty-CLcrpJsE.js';
import '../WebIconProperty-MLEi2sc0.js';
import '../WebStaticImageProperty-C3LJYoNm.js';
import '../Fragment-C-45CGtT.js';
import '../Image-CNc12AI2.js';
import '../SidebarToggle-Bw-HLNop.js';
import '../D7vCi_Rn-BKFLWyMt.js';
import '../CGlz0zm4-DhbfSt7O.js';
import '../ScrollContainer-U0HrQ4Hh.js';
import '../MenuBar-BOhekOWd.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Container, $Div, $Text, $Datagrid, $DatagridTextFilter, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Container, Div, Text, Datagrid, DatagridTextFilter, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p.MyFirstAIBot.Instruction_Overview.container1",
      $widgetId: "p.MyFirstAIBot.Instruction_Overview.container1",
      class: "mx-name-container1",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstAIBot.Instruction_Overview.layoutGrid1",
            $widgetId: "p.MyFirstAIBot.Instruction_Overview.layoutGrid1",
            class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstAIBot.Instruction_Overview.layoutGrid1$row0",
                  $widgetId: "p.MyFirstAIBot.Instruction_Overview.layoutGrid1$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.MyFirstAIBot.Instruction_Overview.layoutGrid1$row0$column0",
                        $widgetId: "p.MyFirstAIBot.Instruction_Overview.layoutGrid1$row0$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.MyFirstAIBot.Instruction_Overview.text1",
                              $widgetId: "p.MyFirstAIBot.Instruction_Overview.text1",
                              class: "mx-name-text1",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "My Custom Instructions" }, "args": {} }
                                })
                              ]),
                              renderMode: "h2"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Datagrid,
                            {
                              key: "p.MyFirstAIBot.Instruction_Overview.grid1",
                              $widgetId: "p.MyFirstAIBot.Instruction_Overview.grid1",
                              datasource: DatabaseObjectListProperty({
                                "dataSourceId": "p.0",
                                "entity": "MyFirstAIBot.Instruction",
                                "operationId": "kNgc7EafX1a4N2dCkEdL4w",
                                "sort": [],
                                "constraints": { "type": "function", "name": "and", "parameters": [{ "type": "attribute", "attribute": "IsCustom", "context": "MyFirstAIBot.Instruction", "attributeType": "Boolean" }, { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "System.owner", "context": "MyFirstAIBot.Instruction", "attributeType": "ObjectReference" }, { "type": "token", "name": "currentUser" }] }] }
                              }),
                              refreshInterval: 0,
                              itemSelection: SelectionProperty({
                                "selectionType": "Single",
                                "dataSourceId": "p.0"
                              }),
                              itemSelectionMethod: "rowClick",
                              itemSelectionMode: "clear",
                              showSelectAllToggle: true,
                              columns: [
                                {
                                  "showContentAs": "attribute",
                                  "attribute": ListAttributeProperty({
                                    "path": "",
                                    "entity": "MyFirstAIBot.Instruction",
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
                                  "filter": [
                                    /* @__PURE__ */ React.createElement(
                                      $DatagridTextFilter,
                                      {
                                        key: "p.MyFirstAIBot.Instruction_Overview.textFilter1",
                                        $widgetId: "p.MyFirstAIBot.Instruction_Overview.textFilter1",
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
                                        attrChoice: "auto",
                                        linkedDs: void 0,
                                        attributes: [],
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
                                  "width": "manual",
                                  "minWidth": "auto",
                                  "minWidthLimit": 100,
                                  "size": 30,
                                  "alignment": "left",
                                  "wrapText": false
                                },
                                {
                                  "showContentAs": "attribute",
                                  "attribute": ListAttributeProperty({
                                    "path": "",
                                    "entity": "MyFirstAIBot.Instruction",
                                    "attribute": "Instruction",
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
                                      "expression": { "expr": { "type": "literal", "value": "Instruction" }, "args": {} }
                                    })
                                  ]),
                                  "tooltip": selectTranslation([
                                    void 0
                                  ]),
                                  "filter": [
                                    /* @__PURE__ */ React.createElement(
                                      $DatagridTextFilter,
                                      {
                                        key: "p.MyFirstAIBot.Instruction_Overview.textFilter2",
                                        $widgetId: "p.MyFirstAIBot.Instruction_Overview.textFilter2",
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
                                        attrChoice: "auto",
                                        linkedDs: void 0,
                                        attributes: [],
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
                                  "width": "manual",
                                  "minWidth": "auto",
                                  "minWidthLimit": 100,
                                  "size": 70,
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
                                "action": { "type": "openPage", "argMap": { "param$Instruction": { "widget": "p.MyFirstAIBot.Instruction_Overview.grid1", "source": "object" } }, "config": { "name": "MyFirstAIBot/Instruction_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
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
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.MyFirstAIBot.Instruction_Overview.actionButton2$visibility",
                                    $widgetId: "p.MyFirstAIBot.Instruction_Overview.actionButton2$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.MyFirstAIBot.Instruction_Overview.actionButton2",
                                          $widgetId: "p.MyFirstAIBot.Instruction_Overview.actionButton2",
                                          buttonId: "p.MyFirstAIBot.Instruction_Overview.actionButton2",
                                          class: "mx-name-actionButton2 spacing-outer-bottom spacing-outer-right",
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
                                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "oEQBirPEz1qcIdZxAz85/A", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
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
                                    key: "p.MyFirstAIBot.Instruction_Overview.actionButton1$visibility",
                                    $widgetId: "p.MyFirstAIBot.Instruction_Overview.actionButton1$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.MyFirstAIBot.Instruction_Overview.actionButton1",
                                          $widgetId: "p.MyFirstAIBot.Instruction_Overview.actionButton1",
                                          buttonId: "p.MyFirstAIBot.Instruction_Overview.actionButton1",
                                          class: "mx-name-actionButton1 spacing-outer-bottom spacing-outer-right",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Edit" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: void 0,
                                          action: ActionProperty({
                                            "action": { "type": "openPage", "argMap": { "param$Instruction": { "widget": "p.MyFirstAIBot.Instruction_Overview.grid1", "source": "selection" } }, "config": { "name": "MyFirstAIBot/Instruction_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
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
                                    key: "p.MyFirstAIBot.Instruction_Overview.actionButton3$visibility",
                                    $widgetId: "p.MyFirstAIBot.Instruction_Overview.actionButton3$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "User" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.MyFirstAIBot.Instruction_Overview.actionButton3",
                                          $widgetId: "p.MyFirstAIBot.Instruction_Overview.actionButton3",
                                          buttonId: "p.MyFirstAIBot.Instruction_Overview.actionButton3",
                                          class: "mx-name-actionButton3 spacing-outer-bottom spacing-outer-right",
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
                                          icon: void 0,
                                          action: ActionProperty({
                                            "action": { "type": "callMicroflow", "argMap": { "Instruction": { "widget": "p.MyFirstAIBot.Instruction_Overview.grid1", "source": "selection" } }, "config": { "operationId": "/pOdro+xc1CfdJorPjgJNQ", "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure?"]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["User"] }, "disabledDuringExecution": true },
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
                              loadingType: "spinner",
                              showNumberOfRows: false,
                              storeFiltersInPersonalization: true,
                              selectAllRowsLabel: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Select all rows" }, "args": {} }
                                })
                              ]),
                              enableSelectAll: false,
                              keepSelection: false,
                              selectionCounterPosition: "bottom",
                              refreshIndicator: false,
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
                              class: "mx-name-grid1",
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
      ],
      ariaHidden: false
    }
  )
]);
const title = selectTranslation([
  "My custom instructions"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_TopBar.Main": region$Main
};

export { classes, content, style, title };
