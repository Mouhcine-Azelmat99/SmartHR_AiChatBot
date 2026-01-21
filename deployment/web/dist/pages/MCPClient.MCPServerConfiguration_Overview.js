import { reactExports, asPluginWidgets, Fragment, addEnumerations, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { ListAttributeProperty, AttributeMetaDataProperty } from '../ListAttributeProperty-dWq-nfHX.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-BEIxbT2n.js';
import { ListActionProperty } from '../ListActionProperty-CSktymVx.js';
import { SelectionProperty } from '../SelectionProperty-C9kVY2tk.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-CgBaKmKA.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { WebIconProperty } from '../WebIconProperty-I8EGGvK6.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-B3bpPygB.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BilSZaU4.js';
import { DatagridWidgetModule } from '../Datagrid-CPOmkQcC.js';
import { DatagridDropdownFilterWidgetModule } from '../DatagridDropdownFilter-D7GLhvkG.js';
import { DatagridTextFilterWidgetModule } from '../DatagridTextFilter-CNeyl2wT.js';
import { Div } from '../Div-DnhZCXw4.js';
import { EventsWidgetModule } from '../Events-yqGzB7c-.js';
import '../Fragment-kXArd_1S.js';
import { ImageWidgetModule } from '../Image-Cid1Yr5n.js';
import { Text } from '../Text-Ct6rfb-k.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-iCAKiLvO.js';
import '../CTcC6PjV-eX91G0mv.js';
import '../uEIG9e6s-VBk3qU43.js';
import '../CxoxYXlg-BJ3P5g_E.js';
import '../UeptbR6O-Dse5KB9T.js';
import '../CkBXggmw-D1iecObi.js';
import '../CTQxk13g-CU8g3epp.js';
import '../index-BP8nYpIk.js';
import '../InlineText-f914ePRH.js';
import '../ListExpressionProperty-Cd_aouEd.js';
import '../Container-PSi6m2QL.js';
import '../SidebarToggle-CDtAU1t8.js';
import '../D7vCi_Rn-CSXZhW_h.js';
import '../CGlz0zm4-D9CbusC5.js';
import '../ScrollContainer-DO1bE89X.js';

const ACT_MCPServerConfiguration_Refresh = {
  "name": "MCPClient.ACT_MCPServerConfiguration_Refresh",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "5f81b1a8-45e9-4b96-a071-3d01f941314a",
      "operationId": "XwDLILH0iFye6PkplqxT4A",
      "parameters": []
    },
    {
      "type": "return",
      "label": "38e02727-fd34-4bb1-9188-584cdd5309c6",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridDropdownFilter = Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "DatagridDropdownFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const Events = Object.getOwnPropertyDescriptor(EventsWidgetModule, "Events")?.value || Object.getOwnPropertyDescriptor(EventsWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const { $Div, $Text, $Fragment, $ConditionalVisibilityWrapper, $ActionButton, $Events, $Datagrid, $DatagridTextFilter, $DatagridDropdownFilter, $Image } = asPluginWidgets({ Div, Text, Fragment, ConditionalVisibilityWrapper, ActionButton, Events, Datagrid, DatagridTextFilter, DatagridDropdownFilter, Image });
addEnumerations({
  "MCPClient.ENUM_SyncState": [
    [
      "Synced",
      selectTranslation([
        "Synced"
      ])
    ],
    [
      "Syncing",
      selectTranslation([
        "Syncing"
      ])
    ],
    [
      "Not_synced",
      selectTranslation([
        "Not synced"
      ])
    ]
  ]
});
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MCPClient.MCPServerConfiguration_Overview.layoutGrid1",
      $widgetId: "p.MCPClient.MCPServerConfiguration_Overview.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MCPClient.MCPServerConfiguration_Overview.layoutGrid1$row0",
            $widgetId: "p.MCPClient.MCPServerConfiguration_Overview.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MCPClient.MCPServerConfiguration_Overview.layoutGrid1$row0$column0",
                  $widgetId: "p.MCPClient.MCPServerConfiguration_Overview.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Text,
                      {
                        key: "p.MCPClient.MCPServerConfiguration_Overview.text1",
                        $widgetId: "p.MCPClient.MCPServerConfiguration_Overview.text1",
                        class: "mx-name-text1",
                        style: void 0,
                        caption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "MCP Server Configurations" }, "args": {} }
                          })
                        ]),
                        renderMode: "h2"
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Fragment,
                      {
                        key: "p.MCPClient.MCPServerConfiguration_Overview.snippetCall1",
                        $widgetId: "p.MCPClient.MCPServerConfiguration_Overview.snippetCall1",
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton1$visibility",
                              $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton1",
                                    $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton1",
                                    buttonId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton1",
                                    class: "mx-name-actionButton1",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-primary",
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
                                    icon: WebIconProperty({
                                      "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-add" }
                                    }),
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "xnFVJVS94l+ECz2ejwgI+Q", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                              key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton6$visibility",
                              $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton6$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton6",
                                    $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton6",
                                    buttonId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton6",
                                    class: "mx-name-actionButton6 spacing-outer-left",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-default",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Sync tools for all servers" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: WebIconProperty({
                                      "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-cloud-sync" }
                                    }),
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "8mHuBba7a1ytqA9jyQPKvw", "progress": { "message": selectTranslation([""]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Events,
                            {
                              key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.events1",
                              $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.events1",
                              onComponentLoad: ActionProperty({
                                "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => ACT_MCPServerConfiguration_Refresh, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                "argumentTypes": {}
                              }),
                              componentLoadDelay: 5e3,
                              componentLoadRepeat: true,
                              componentLoadRepeatInterval: 5e3,
                              onEventChange: void 0,
                              onEventChangeDelay: 0,
                              class: "mx-name-events1",
                              style: void 0,
                              tabIndex: void 0
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Datagrid,
                            {
                              key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1",
                              $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1",
                              datasource: DatabaseObjectListProperty({
                                "dataSourceId": "p.4",
                                "entity": "MCPClient.MCPServerConfiguration",
                                "operationId": "7Ys94z2tLFmjQkjyg7QuRg",
                                "sort": []
                              }),
                              refreshInterval: 0,
                              itemSelection: SelectionProperty({
                                "selectionType": "Single",
                                "dataSourceId": "p.4"
                              }),
                              itemSelectionMethod: "rowClick",
                              itemSelectionMode: "clear",
                              showSelectAllToggle: true,
                              loadingType: "spinner",
                              columns: [
                                {
                                  "showContentAs": "attribute",
                                  "attribute": ListAttributeProperty({
                                    "path": "",
                                    "entity": "MCPClient.MCPServerConfiguration",
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
                                        key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter3",
                                        $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter3",
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
                                    "entity": "MCPClient.MCPServerConfiguration",
                                    "attribute": "MCPEndpoint",
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
                                      "expression": { "expr": { "type": "literal", "value": "MCP endpoint" }, "args": {} }
                                    })
                                  ]),
                                  "tooltip": selectTranslation([
                                    void 0
                                  ]),
                                  "filter": [
                                    /* @__PURE__ */ React.createElement(
                                      $DatagridTextFilter,
                                      {
                                        key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter2",
                                        $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter2",
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
                                  "showContentAs": "attribute",
                                  "attribute": ListAttributeProperty({
                                    "path": "",
                                    "entity": "MCPClient.MCPServerConfiguration",
                                    "attribute": "Version",
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
                                      "expression": { "expr": { "type": "literal", "value": "Version" }, "args": {} }
                                    })
                                  ]),
                                  "tooltip": selectTranslation([
                                    void 0
                                  ]),
                                  "filter": [
                                    /* @__PURE__ */ React.createElement(
                                      $DatagridTextFilter,
                                      {
                                        key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter4",
                                        $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter4",
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
                                  "showContentAs": "attribute",
                                  "attribute": ListAttributeProperty({
                                    "path": "",
                                    "entity": "MCPClient.MCPServerConfiguration",
                                    "attribute": "ProtocolVersion",
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
                                      "expression": { "expr": { "type": "literal", "value": "Protocol version" }, "args": {} }
                                    })
                                  ]),
                                  "tooltip": selectTranslation([
                                    void 0
                                  ]),
                                  "filter": [
                                    /* @__PURE__ */ React.createElement(
                                      $DatagridDropdownFilter,
                                      {
                                        key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.drop_downFilter1",
                                        $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.drop_downFilter1",
                                        baseType: "attr",
                                        linkedDs: void 0,
                                        attrChoice: "auto",
                                        auto: true,
                                        filterOptions: [],
                                        refOptions: void 0,
                                        refCaptionSource: "attr",
                                        fetchOptionsLazy: false,
                                        defaultValue: void 0,
                                        filterable: false,
                                        multiSelect: false,
                                        emptyOptionCaption: selectTranslation([
                                          ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "None" }, "args": {} }
                                          })
                                        ]),
                                        clearable: true,
                                        selectedItemsStyle: "text",
                                        selectionMethod: "checkbox",
                                        onChange: void 0,
                                        ariaLabel: selectTranslation([
                                          ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                          })
                                        ]),
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
                                    "entity": "MCPClient.MCPServerConfiguration",
                                    "attribute": "GetCredentialsMicroflow",
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
                                      "expression": { "expr": { "type": "literal", "value": "Get credentials microflow" }, "args": {} }
                                    })
                                  ]),
                                  "tooltip": selectTranslation([
                                    void 0
                                  ]),
                                  "filter": [
                                    /* @__PURE__ */ React.createElement(
                                      $DatagridTextFilter,
                                      {
                                        key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter1",
                                        $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter1",
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
                                  "showContentAs": "customContent",
                                  "attribute": ListAttributeProperty({
                                    "path": "",
                                    "entity": "MCPClient.MCPServerConfiguration",
                                    "attribute": "SyncState",
                                    "attributeType": "Enum",
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
                                          key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.image20$visibility",
                                          $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.image20$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SyncState" }, { "type": "literal", "value": "Not_synced" }] }, "args": { "currentObject": { "widget": "p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.image20",
                                                $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.image20",
                                                datasource: "image",
                                                imageObject: WebStaticImageProperty({
                                                  "image": { "uri": "img/MCPClient$Images_MCPClient$alert_circle_filled.svg" }
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
                                                class: "mx-name-image20",
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
                                          key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.image21$visibility",
                                          $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.image21$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SyncState" }, { "type": "literal", "value": "Synced" }] }, "args": { "currentObject": { "widget": "p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.image21",
                                                $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.image21",
                                                datasource: "image",
                                                imageObject: WebStaticImageProperty({
                                                  "image": { "uri": "img/MCPClient$Images_MCPClient$checkmark_circle.svg" }
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
                                                class: "mx-name-image21",
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
                                          key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.image22$visibility",
                                          $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.image22$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SyncState" }, { "type": "literal", "value": "Syncing" }] }, "args": { "currentObject": { "widget": "p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.image22",
                                                $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.image22",
                                                datasource: "image",
                                                imageObject: WebStaticImageProperty({
                                                  "image": { "uri": "img/MCPClient$Images_MCPClient$refresh.svg" }
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
                                                class: "mx-name-image22",
                                                style: void 0,
                                                tabIndex: void 0
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
                                      "expression": { "expr": { "type": "literal", "value": "Sync state" }, "args": {} }
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
                                    "entity": "MCPClient.MCPServerConfiguration",
                                    "attribute": "MCPEndpoint",
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
                                          key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton4$visibility",
                                          $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton4$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton4",
                                                $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton4",
                                                buttonId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton4",
                                                class: "mx-name-actionButton4 btn-lg",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "link",
                                                role: "button",
                                                buttonClass: "btn-primary",
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
                                                  "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-pencil" }
                                                }),
                                                action: ActionProperty({
                                                  "action": { "type": "openPage", "argMap": { "param$MCPServerConfiguration": { "widget": "p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1", "source": "object" } }, "config": { "name": "MCPClient/MCPServerConfiguration_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                          key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton5$visibility",
                                          $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton5$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton5",
                                                $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton5",
                                                buttonId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton5",
                                                class: "mx-name-actionButton5 btn-lg spacing-outer-left",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "link",
                                                role: "button",
                                                buttonClass: "btn-primary",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    "Snyc tools from server"
                                                  ])
                                                }),
                                                icon: WebIconProperty({
                                                  "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-cloud-sync" }
                                                }),
                                                action: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": { "MCPServerConfiguration": { "widget": "p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1", "source": "object" } }, "config": { "operationId": "MjltZmsQCVa+zzIsmJlboA", "progress": { "message": selectTranslation(["Syncing MCP tools. This may take a while."]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                          key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton2$visibility",
                                          $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton2$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton2",
                                                $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton2",
                                                buttonId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton2",
                                                class: "mx-name-actionButton2 btn-lg spacing-outer-left spacing-outer-right",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "link",
                                                role: "button",
                                                buttonClass: "btn-primary",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    "View MCP tools & prompts"
                                                  ])
                                                }),
                                                icon: WebIconProperty({
                                                  "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-browser-search" }
                                                }),
                                                action: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": { "MCPServerConfiguration": { "widget": "p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1", "source": "object" } }, "config": { "operationId": "hpJwPbazyl+QyV6izwGmBA", "progress": { "message": selectTranslation(["Syncing MCP tools and prompts from server. This may take a while."]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                          key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton3$visibility",
                                          $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton3$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton3",
                                                $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton3",
                                                buttonId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton3",
                                                class: "mx-name-actionButton3 btn-lg",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "link",
                                                role: "button",
                                                buttonClass: "btn-primary",
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
                                                  "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-trash-can" }
                                                }),
                                                action: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": { "MCPServerConfiguration": { "widget": "p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1", "source": "object" } }, "config": { "operationId": "WvMSAg1zEFGi/GgJIzSj4g", "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure?"]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                              onClickTrigger: "double",
                              onClick: ListActionProperty({
                                "action": { "type": "openPage", "argMap": { "param$MCPServerConfiguration": { "widget": "p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1", "source": "object" } }, "config": { "name": "MCPClient/MCPServerConfiguration_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                "abortOnServerValidation": false,
                                "dataSourceId": "p.4",
                                "argumentTypes": {}
                              }),
                              onSelectionChange: void 0,
                              filtersPlaceholder: [
                                /* @__PURE__ */ React.createElement(
                                  $DatagridTextFilter,
                                  {
                                    key: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter5",
                                    $widgetId: "p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter5",
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
                                          "entity": "MCPClient.MCPServerConfiguration",
                                          "attribute": "MCPEndpoint",
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
                                          "entity": "MCPClient.MCPServerConfiguration",
                                          "attribute": "Name",
                                          "attributeType": "String",
                                          "sortable": true,
                                          "filterable": true,
                                          "dataSourceId": "p.4",
                                          "isList": false
                                        })
                                      }
                                    ],
                                    class: "mx-name-textFilter5 spacing-outer-top spacing-outer-bottom",
                                    style: void 0,
                                    tabIndex: void 0
                                  }
                                )
                              ],
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
                              class: "mx-name-dataGrid2_1",
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
]);
const title = selectTranslation([
  "MCP Server Configuration Overview"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
