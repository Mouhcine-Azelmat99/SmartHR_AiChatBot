import { reactExports, asPluginWidgets, selectTranslation } from '../index-B-pQLZz2.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C1uYYDJ5.js';
import { ActionButton, ActionProperty } from '../ActionButton-C47bDiwH.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-Dk1DF3Sc.js';
import { ListActionProperty } from '../ListActionProperty-CTAwa0C2.js';
import { ListAttributeProperty } from '../ListAttributeProperty-CJPrRUfN.js';
import { SelectionProperty } from '../SelectionProperty-nkaVjDjK.js';
import { TextProperty } from '../TextProperty-ukMsrrP8.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C-2xhd5O.js';
import { Container } from '../Container-CTbE-yQS.js';
import { DatagridWidgetModule } from '../Datagrid-BYP0BNeL.js';
import { DatagridDropdownFilterWidgetModule } from '../DatagridDropdownFilter-BZ5hPH9S.js';
import { DatagridTextFilterWidgetModule } from '../DatagridTextFilter-CMo3F3oP.js';
import { Div } from '../Div-C2k8MuH7.js';
import { Text } from '../Text-5NmEA291.js';
import { content as content$1 } from '../Atlas_Core.Atlas_TopBar-Cl1SnfwM.js';
import '../UeptbR6O-9Cnv5Sxb.js';
import '../uEIG9e6s-CoI72Q4o.js';
import '../CkBXggmw-CEa7-Kz-.js';
import '../CTcC6PjV-CLE6jBCq.js';
import '../CxoxYXlg-rXnL4f6K.js';
import '../CTQxk13g-BDTc581w.js';
import '../index-CgEeXS6W.js';
import '../InlineText-CcVi-f0x.js';
import '../ListExpressionProperty-Blkk1P49.js';
import '../WebIconProperty-B4eQIHHv.js';
import '../WebStaticImageProperty-D6HpETLo.js';
import '../Fragment-C3M8OT7J.js';
import '../Image-CwuIpbpH.js';
import '../SidebarToggle-U7U0qqOC.js';
import '../D7vCi_Rn-Dtbqkh4B.js';
import '../CGlz0zm4-CawGDyow.js';
import '../ScrollContainer-B-pXvHDA.js';
import '../MenuBar-rOfPUVLa.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridDropdownFilter = Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "DatagridDropdownFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Container, $Div, $Text, $Datagrid, $DatagridTextFilter, $DatagridDropdownFilter, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Container, Div, Text, Datagrid, DatagridTextFilter, DatagridDropdownFilter, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.container1",
      $widgetId: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.container1",
      class: "mx-name-container1",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.layoutGrid1",
            $widgetId: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.layoutGrid1",
            class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.layoutGrid1$row0",
                  $widgetId: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.layoutGrid1$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.layoutGrid1$row0$column0",
                        $widgetId: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.layoutGrid1$row0$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.text1",
                              $widgetId: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.text1",
                              class: "mx-name-text1",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Initial User Prompt Admin Overview" }, "args": {} }
                                })
                              ]),
                              renderMode: "h2"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Datagrid,
                            {
                              key: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.grid1",
                              $widgetId: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.grid1",
                              datasource: DatabaseObjectListProperty({
                                "dataSourceId": "p.0",
                                "entity": "MyFirstAIBot.InitialUserPrompt",
                                "operationId": "NZgVHRdPK1yLw6kHPS3H9A",
                                "sort": [
                                  [
                                    "Order",
                                    "asc"
                                  ],
                                  [
                                    "Header",
                                    "asc"
                                  ]
                                ]
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
                                    "entity": "MyFirstAIBot.InitialUserPrompt",
                                    "attribute": "Order",
                                    "attributeType": "Integer",
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
                                      "expression": { "expr": { "type": "literal", "value": "Order" }, "args": {} }
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
                                  "width": "manual",
                                  "minWidth": "auto",
                                  "minWidthLimit": 100,
                                  "size": 12,
                                  "alignment": "left",
                                  "wrapText": false
                                },
                                {
                                  "showContentAs": "attribute",
                                  "attribute": ListAttributeProperty({
                                    "path": "",
                                    "entity": "MyFirstAIBot.InitialUserPrompt",
                                    "attribute": "Header",
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
                                      "expression": { "expr": { "type": "literal", "value": "Header" }, "args": {} }
                                    })
                                  ]),
                                  "tooltip": selectTranslation([
                                    void 0
                                  ]),
                                  "filter": [
                                    /* @__PURE__ */ React.createElement(
                                      $DatagridTextFilter,
                                      {
                                        key: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.textFilter1",
                                        $widgetId: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.textFilter1",
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
                                  "size": 25,
                                  "alignment": "left",
                                  "wrapText": false
                                },
                                {
                                  "showContentAs": "attribute",
                                  "attribute": ListAttributeProperty({
                                    "path": "",
                                    "entity": "MyFirstAIBot.InitialUserPrompt",
                                    "attribute": "Category",
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
                                  "exportValue": selectTranslation([
                                    void 0
                                  ]),
                                  "header": selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Category" }, "args": {} }
                                    })
                                  ]),
                                  "tooltip": selectTranslation([
                                    void 0
                                  ]),
                                  "filter": [
                                    /* @__PURE__ */ React.createElement(
                                      $DatagridDropdownFilter,
                                      {
                                        key: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.drop_downFilter1",
                                        $widgetId: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.drop_downFilter1",
                                        auto: true,
                                        defaultValue: void 0,
                                        filterOptions: [],
                                        emptyOptionCaption: selectTranslation([
                                          ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                          })
                                        ]),
                                        multiSelect: false,
                                        onChange: void 0,
                                        ariaLabel: selectTranslation([
                                          ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                          })
                                        ]),
                                        baseType: "attr",
                                        linkedDs: void 0,
                                        attrChoice: "auto",
                                        refOptions: void 0,
                                        refCaptionSource: "attr",
                                        fetchOptionsLazy: false,
                                        filterable: false,
                                        clearable: true,
                                        selectedItemsStyle: "text",
                                        selectionMethod: "checkbox",
                                        emptySelectionCaption: selectTranslation([
                                          ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Select" }, "args": {} }
                                          })
                                        ]),
                                        filterInputPlaceholderCaption: selectTranslation([
                                          ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                          })
                                        ]),
                                        class: "mx-name-drop_downFilter1",
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
                                  "size": 12,
                                  "alignment": "left",
                                  "wrapText": false
                                },
                                {
                                  "showContentAs": "attribute",
                                  "attribute": ListAttributeProperty({
                                    "path": "",
                                    "entity": "MyFirstAIBot.InitialUserPrompt",
                                    "attribute": "UserPrompt",
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
                                      "expression": { "expr": { "type": "literal", "value": "User prompt" }, "args": {} }
                                    })
                                  ]),
                                  "tooltip": selectTranslation([
                                    void 0
                                  ]),
                                  "filter": [
                                    /* @__PURE__ */ React.createElement(
                                      $DatagridTextFilter,
                                      {
                                        key: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.textFilter2",
                                        $widgetId: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.textFilter2",
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
                                  "size": 25,
                                  "alignment": "left",
                                  "wrapText": false
                                },
                                {
                                  "showContentAs": "attribute",
                                  "attribute": ListAttributeProperty({
                                    "path": "MyFirstAIBot.InitialUserPrompt_Instruction/MyFirstAIBot.Instruction",
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
                                      "expression": { "expr": { "type": "literal", "value": "Instruction" }, "args": {} }
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
                                  "width": "manual",
                                  "minWidth": "auto",
                                  "minWidthLimit": 100,
                                  "size": 26,
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
                                "action": { "type": "openPage", "argMap": { "param$InitialUserPrompt": { "widget": "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.grid1", "source": "object" } }, "config": { "name": "MyFirstAIBot/InitialUserPrompt_NewEdit.page.xml", "location": "modal", "width": 800, "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
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
                                    key: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.actionButton2$visibility",
                                    $widgetId: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.actionButton2$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.actionButton2",
                                          $widgetId: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.actionButton2",
                                          buttonId: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.actionButton2",
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
                                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "O/0mRwDbJl2yNQXrxRS4bg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                    key: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.actionButton1$visibility",
                                    $widgetId: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.actionButton1$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.actionButton1",
                                          $widgetId: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.actionButton1",
                                          buttonId: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.actionButton1",
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
                                            "action": { "type": "openPage", "argMap": { "param$InitialUserPrompt": { "widget": "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.grid1", "source": "selection" } }, "config": { "name": "MyFirstAIBot/InitialUserPrompt_NewEdit.page.xml", "location": "modal", "width": 800, "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                    key: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.actionButton3$visibility",
                                    $widgetId: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.actionButton3$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.actionButton3",
                                          $widgetId: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.actionButton3",
                                          buttonId: "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.actionButton3",
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
                                            "action": { "type": "callMicroflow", "argMap": { "InitialUserPrompt": { "widget": "p.MyFirstAIBot.InitialUserPrompt_Overview_Admin.grid1", "source": "selection" } }, "config": { "operationId": "DAf2V86zjVWEOZfc0P2uzA", "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure?"]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
  "Initial User Prompt Admin Overview"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_TopBar.Main": region$Main
};

export { classes, content, style, title };
