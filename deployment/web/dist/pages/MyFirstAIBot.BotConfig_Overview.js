import { reactExports, asPluginWidgets, addEnumerations, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { AssociationObjectListProperty } from '../AssociationObjectListProperty-EcNik3ti.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-BEIxbT2n.js';
import { ListActionProperty } from '../ListActionProperty-CSktymVx.js';
import { ListAttributeProperty } from '../ListAttributeProperty-dWq-nfHX.js';
import { ListenObjectProperty } from '../ListenObjectProperty-Cadqp20A.js';
import { SelectionProperty } from '../SelectionProperty-C9kVY2tk.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-CgBaKmKA.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { WebIconProperty } from '../WebIconProperty-I8EGGvK6.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BilSZaU4.js';
import { Container } from '../Container-PSi6m2QL.js';
import { DatagridWidgetModule } from '../Datagrid-CPOmkQcC.js';
import { DatagridDropdownFilterWidgetModule } from '../DatagridDropdownFilter-D7GLhvkG.js';
import { DatagridTextFilterWidgetModule } from '../DatagridTextFilter-CNeyl2wT.js';
import { DataView } from '../DataView-RrZIPNzV.js';
import { Div } from '../Div-DnhZCXw4.js';
import { TabContainer } from '../TabContainer-DOhqi19Q.js';
import { Text } from '../Text-Ct6rfb-k.js';
import { content as content$1 } from '../Atlas_Core.Atlas_TopBar-CLBulviL.js';
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
import '../D7vCi_Rn-CSXZhW_h.js';
import '../D2Vzasyw-BKFXk3UP.js';
import '../InlineText-f914ePRH.js';
import '../ListExpressionProperty-Cd_aouEd.js';
import '../WebStaticImageProperty-B3bpPygB.js';
import '../Fragment-kXArd_1S.js';
import '../Image-Cid1Yr5n.js';
import '../SidebarToggle-CDtAU1t8.js';
import '../CGlz0zm4-D9CbusC5.js';
import '../ScrollContainer-DO1bE89X.js';
import '../MenuBar-Cfla47fm.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridDropdownFilter = Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "DatagridDropdownFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Div, $TabContainer, $Container, $Text, $Datagrid, $DatagridTextFilter, $DatagridDropdownFilter, $ConditionalVisibilityWrapper, $ActionButton, $DataView } = asPluginWidgets({ Div, TabContainer, Container, Text, Datagrid, DatagridTextFilter, DatagridDropdownFilter, ConditionalVisibilityWrapper, ActionButton, DataView });
addEnumerations({
  "MyFirstAIBot.ENUM_ActionMicroflowSelection": [
    [
      "ChatContext_ChatWithHistory_ActionMicroflow",
      selectTranslation([
        "ChatContext_ChatWithHistory_ActionMicroflow"
      ])
    ],
    [
      "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow",
      selectTranslation([
        "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow"
      ])
    ]
  ]
});
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid3",
      $widgetId: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid3",
      class: "mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid3$row0",
            $widgetId: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid3$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid3$row0$column0",
                  $widgetId: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid3$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $TabContainer,
                      {
                        key: "p.MyFirstAIBot.BotConfig_Overview.tabContainer1",
                        $widgetId: "p.MyFirstAIBot.BotConfig_Overview.tabContainer1",
                        class: "mx-name-tabContainer1",
                        style: void 0,
                        tabIndex: void 0,
                        widgetId: "p.MyFirstAIBot.BotConfig_Overview.tabContainer1",
                        defaultTab: 0,
                        tabs: [
                          {
                            "name": "tabPage1",
                            "caption": TextProperty({
                              "value": selectTranslation([
                                "ChatBot Config"
                              ])
                            }),
                            "isDelayed": false,
                            "refreshOnShow": false,
                            "content": [
                              /* @__PURE__ */ React.createElement(
                                $Div,
                                {
                                  key: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid1",
                                  $widgetId: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid1",
                                  class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid",
                                  style: void 0,
                                  content: [
                                    /* @__PURE__ */ React.createElement(
                                      $Div,
                                      {
                                        key: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid1$row0",
                                        $widgetId: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid1$row0",
                                        class: "row",
                                        style: void 0,
                                        content: [
                                          /* @__PURE__ */ React.createElement(
                                            $Div,
                                            {
                                              key: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid1$row0$column0",
                                              $widgetId: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid1$row0$column0",
                                              class: "col-lg-8 col-md-12 col-12",
                                              style: void 0,
                                              content: [
                                                /* @__PURE__ */ React.createElement(
                                                  $Container,
                                                  {
                                                    key: "p.MyFirstAIBot.BotConfig_Overview.container2",
                                                    $widgetId: "p.MyFirstAIBot.BotConfig_Overview.container2",
                                                    class: "mx-name-container2 card",
                                                    style: void 0,
                                                    renderMode: "div",
                                                    onClick: void 0,
                                                    content: [
                                                      /* @__PURE__ */ React.createElement(
                                                        $Text,
                                                        {
                                                          key: "p.MyFirstAIBot.BotConfig_Overview.text1",
                                                          $widgetId: "p.MyFirstAIBot.BotConfig_Overview.text1",
                                                          class: "mx-name-text1",
                                                          style: void 0,
                                                          caption: selectTranslation([
                                                            ExpressionProperty({
                                                              "expression": { "expr": { "type": "literal", "value": "Bot Configuration" }, "args": {} }
                                                            })
                                                          ]),
                                                          renderMode: "h2"
                                                        }
                                                      ),
                                                      /* @__PURE__ */ React.createElement(
                                                        $Datagrid,
                                                        {
                                                          key: "p.MyFirstAIBot.BotConfig_Overview.grid1",
                                                          $widgetId: "p.MyFirstAIBot.BotConfig_Overview.grid1",
                                                          datasource: DatabaseObjectListProperty({
                                                            "dataSourceId": "p.4",
                                                            "entity": "MyFirstAIBot.BotConfig",
                                                            "operationId": "bzqMp/4CK1WviPGRno0bAg",
                                                            "sort": [
                                                              [
                                                                "IsDefault",
                                                                "desc"
                                                              ],
                                                              [
                                                                "DisplayName",
                                                                "asc"
                                                              ]
                                                            ]
                                                          }),
                                                          refreshInterval: 0,
                                                          itemSelection: SelectionProperty({
                                                            "selectionType": "Single",
                                                            "dataSourceId": "p.4"
                                                          }),
                                                          itemSelectionMethod: "rowClick",
                                                          itemSelectionMode: "clear",
                                                          showSelectAllToggle: true,
                                                          columns: [
                                                            {
                                                              "showContentAs": "attribute",
                                                              "attribute": ListAttributeProperty({
                                                                "path": "",
                                                                "entity": "MyFirstAIBot.BotConfig",
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
                                                              "filter": [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DatagridTextFilter,
                                                                  {
                                                                    key: "p.MyFirstAIBot.BotConfig_Overview.textFilter1",
                                                                    $widgetId: "p.MyFirstAIBot.BotConfig_Overview.textFilter1",
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
                                                              "size": 35,
                                                              "alignment": "left",
                                                              "wrapText": false
                                                            },
                                                            {
                                                              "showContentAs": "attribute",
                                                              "attribute": ListAttributeProperty({
                                                                "path": "ConversationalUI.ProviderConfig_DeployedModel/GenAICommons.DeployedModel",
                                                                "entity": "GenAICommons.DeployedModel",
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
                                                                  "expression": { "expr": { "type": "literal", "value": "Model" }, "args": {} }
                                                                })
                                                              ]),
                                                              "tooltip": selectTranslation([
                                                                void 0
                                                              ]),
                                                              "filter": [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DatagridTextFilter,
                                                                  {
                                                                    key: "p.MyFirstAIBot.BotConfig_Overview.textFilter2",
                                                                    $widgetId: "p.MyFirstAIBot.BotConfig_Overview.textFilter2",
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
                                                              "size": 15,
                                                              "alignment": "left",
                                                              "wrapText": false
                                                            },
                                                            {
                                                              "showContentAs": "attribute",
                                                              "attribute": ListAttributeProperty({
                                                                "path": "",
                                                                "entity": "MyFirstAIBot.BotConfig",
                                                                "attribute": "ActionMicroflowSelection",
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
                                                                  "expression": { "expr": { "type": "literal", "value": "Action microflow" }, "args": {} }
                                                                })
                                                              ]),
                                                              "tooltip": selectTranslation([
                                                                void 0
                                                              ]),
                                                              "filter": [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DatagridDropdownFilter,
                                                                  {
                                                                    key: "p.MyFirstAIBot.BotConfig_Overview.drop_downFilter1",
                                                                    $widgetId: "p.MyFirstAIBot.BotConfig_Overview.drop_downFilter1",
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
                                                              "size": 30,
                                                              "alignment": "left",
                                                              "wrapText": false
                                                            },
                                                            {
                                                              "showContentAs": "attribute",
                                                              "attribute": ListAttributeProperty({
                                                                "path": "",
                                                                "entity": "MyFirstAIBot.BotConfig",
                                                                "attribute": "IsSelectable",
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
                                                                  "expression": { "expr": { "type": "literal", "value": "Is selectable" }, "args": {} }
                                                                })
                                                              ]),
                                                              "tooltip": selectTranslation([
                                                                void 0
                                                              ]),
                                                              "filter": [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DatagridDropdownFilter,
                                                                  {
                                                                    key: "p.MyFirstAIBot.BotConfig_Overview.drop_downFilter2",
                                                                    $widgetId: "p.MyFirstAIBot.BotConfig_Overview.drop_downFilter2",
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
                                                                    class: "mx-name-drop_downFilter2",
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
                                                              "size": 10,
                                                              "alignment": "left",
                                                              "wrapText": false
                                                            },
                                                            {
                                                              "showContentAs": "attribute",
                                                              "attribute": ListAttributeProperty({
                                                                "path": "",
                                                                "entity": "MyFirstAIBot.BotConfig",
                                                                "attribute": "IsDefault",
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
                                                                  "expression": { "expr": { "type": "literal", "value": "Is default" }, "args": {} }
                                                                })
                                                              ]),
                                                              "tooltip": selectTranslation([
                                                                void 0
                                                              ]),
                                                              "filter": [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DatagridDropdownFilter,
                                                                  {
                                                                    key: "p.MyFirstAIBot.BotConfig_Overview.drop_downFilter3",
                                                                    $widgetId: "p.MyFirstAIBot.BotConfig_Overview.drop_downFilter3",
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
                                                                    class: "mx-name-drop_downFilter3",
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
                                                              "size": 10,
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
                                                            "action": { "type": "openPage", "argMap": { "param$BotConfig": { "widget": "p.MyFirstAIBot.BotConfig_Overview.grid1", "source": "object" } }, "config": { "name": "MyFirstAIBot/BotConfig_NewEdit.page.xml", "title": selectTranslation([{ "type": "literal", "value": "Edit Bot Configuration" }]), "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
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
                                                              $ConditionalVisibilityWrapper,
                                                              {
                                                                key: "p.MyFirstAIBot.BotConfig_Overview.actionButton2$visibility",
                                                                $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton2$visibility",
                                                                visible: ExpressionProperty({
                                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                }),
                                                                contents: [
                                                                  /* @__PURE__ */ React.createElement(
                                                                    $ActionButton,
                                                                    {
                                                                      key: "p.MyFirstAIBot.BotConfig_Overview.actionButton2",
                                                                      $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton2",
                                                                      buttonId: "p.MyFirstAIBot.BotConfig_Overview.actionButton2",
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
                                                                        "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "hMIsa0m24FmgiLdGtTR4cw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                key: "p.MyFirstAIBot.BotConfig_Overview.actionButton1$visibility",
                                                                $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton1$visibility",
                                                                visible: ExpressionProperty({
                                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                }),
                                                                contents: [
                                                                  /* @__PURE__ */ React.createElement(
                                                                    $ActionButton,
                                                                    {
                                                                      key: "p.MyFirstAIBot.BotConfig_Overview.actionButton1",
                                                                      $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton1",
                                                                      buttonId: "p.MyFirstAIBot.BotConfig_Overview.actionButton1",
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
                                                                        "action": { "type": "openPage", "argMap": { "param$BotConfig": { "widget": "p.MyFirstAIBot.BotConfig_Overview.grid1", "source": "selection" } }, "config": { "name": "MyFirstAIBot/BotConfig_NewEdit.page.xml", "title": selectTranslation([{ "type": "literal", "value": "Edit Bot Configuration" }]), "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                key: "p.MyFirstAIBot.BotConfig_Overview.actionButton3$visibility",
                                                                $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton3$visibility",
                                                                visible: ExpressionProperty({
                                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                }),
                                                                contents: [
                                                                  /* @__PURE__ */ React.createElement(
                                                                    $ActionButton,
                                                                    {
                                                                      key: "p.MyFirstAIBot.BotConfig_Overview.actionButton3",
                                                                      $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton3",
                                                                      buttonId: "p.MyFirstAIBot.BotConfig_Overview.actionButton3",
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
                                                                        "action": { "type": "callMicroflow", "argMap": { "BotConfig": { "widget": "p.MyFirstAIBot.BotConfig_Overview.grid1", "source": "selection" } }, "config": { "operationId": "oD6+FjFxQVS/mdN1QlBzlw", "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure?"]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                key: "p.MyFirstAIBot.BotConfig_Overview.actionButton11$visibility",
                                                                $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton11$visibility",
                                                                visible: ExpressionProperty({
                                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                }),
                                                                contents: [
                                                                  /* @__PURE__ */ React.createElement(
                                                                    $ActionButton,
                                                                    {
                                                                      key: "p.MyFirstAIBot.BotConfig_Overview.actionButton11",
                                                                      $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton11",
                                                                      buttonId: "p.MyFirstAIBot.BotConfig_Overview.actionButton11",
                                                                      class: "mx-name-actionButton11",
                                                                      style: void 0,
                                                                      tabIndex: void 0,
                                                                      renderType: "button",
                                                                      role: void 0,
                                                                      buttonClass: "btn-default",
                                                                      caption: selectTranslation([
                                                                        ExpressionProperty({
                                                                          "expression": { "expr": { "type": "literal", "value": "Edit DeployedKnowledgeBase" }, "args": {} }
                                                                        })
                                                                      ]),
                                                                      tooltip: TextProperty({
                                                                        "value": selectTranslation([
                                                                          ""
                                                                        ])
                                                                      }),
                                                                      icon: void 0,
                                                                      action: ActionProperty({
                                                                        "action": { "type": "callMicroflow", "argMap": { "BotConfig": { "widget": "p.MyFirstAIBot.BotConfig_Overview.grid1", "source": "selection" } }, "config": { "operationId": "kApcRNemN1G9vnuRJ7wZZw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                key: "p.MyFirstAIBot.BotConfig_Overview.actionButton6$visibility",
                                                                $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton6$visibility",
                                                                visible: ExpressionProperty({
                                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                }),
                                                                contents: [
                                                                  /* @__PURE__ */ React.createElement(
                                                                    $ActionButton,
                                                                    {
                                                                      key: "p.MyFirstAIBot.BotConfig_Overview.actionButton6",
                                                                      $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton6",
                                                                      buttonId: "p.MyFirstAIBot.BotConfig_Overview.actionButton6",
                                                                      class: "mx-name-actionButton6 spacing-outer-bottom spacing-outer-right",
                                                                      style: void 0,
                                                                      tabIndex: void 0,
                                                                      renderType: "button",
                                                                      role: void 0,
                                                                      buttonClass: "btn-default",
                                                                      caption: selectTranslation([
                                                                        ExpressionProperty({
                                                                          "expression": { "expr": { "type": "literal", "value": "Make Default" }, "args": {} }
                                                                        })
                                                                      ]),
                                                                      tooltip: TextProperty({
                                                                        "value": selectTranslation([
                                                                          ""
                                                                        ])
                                                                      }),
                                                                      icon: void 0,
                                                                      action: ActionProperty({
                                                                        "action": { "type": "callMicroflow", "argMap": { "BotConfig": { "widget": "p.MyFirstAIBot.BotConfig_Overview.grid1", "source": "selection" } }, "config": { "operationId": "CatTFycT2FKNSlpYoUUXwg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                              key: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid1$row0$column1",
                                              $widgetId: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid1$row0$column1",
                                              class: "col-lg col-md col",
                                              style: void 0,
                                              content: [
                                                /* @__PURE__ */ React.createElement(
                                                  $DataView,
                                                  {
                                                    key: "p.MyFirstAIBot.BotConfig_Overview.dataView1",
                                                    $widgetId: "p.MyFirstAIBot.BotConfig_Overview.dataView1",
                                                    class: "mx-name-dataView1 form-horizontal",
                                                    style: void 0,
                                                    tabIndex: void 0,
                                                    object: ListenObjectProperty({
                                                      "dataSourceId": "p.64",
                                                      "editable": true,
                                                      "listenTo": "p.MyFirstAIBot.BotConfig_Overview.grid1",
                                                      "operationId": "60+OcJZ20lyu/LfoLJH+OA"
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
                                                          key: "p.MyFirstAIBot.BotConfig_Overview.container1$visibility",
                                                          $widgetId: "p.MyFirstAIBot.BotConfig_Overview.container1$visibility",
                                                          visible: ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ActionMicroflowSelection" }, { "type": "literal", "value": "ChatContext_ChatWithHistory_ActionMicroflow" }] }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.BotConfig_Overview.dataView1", "source": "object" } } }
                                                          }),
                                                          contents: [
                                                            /* @__PURE__ */ React.createElement(
                                                              $Container,
                                                              {
                                                                key: "p.MyFirstAIBot.BotConfig_Overview.container1",
                                                                $widgetId: "p.MyFirstAIBot.BotConfig_Overview.container1",
                                                                class: "mx-name-container1 card",
                                                                style: void 0,
                                                                renderMode: "div",
                                                                onClick: void 0,
                                                                content: [
                                                                  /* @__PURE__ */ React.createElement(
                                                                    $Div,
                                                                    {
                                                                      key: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid2",
                                                                      $widgetId: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid2",
                                                                      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                                      style: void 0,
                                                                      content: [
                                                                        /* @__PURE__ */ React.createElement(
                                                                          $Div,
                                                                          {
                                                                            key: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid2$row0",
                                                                            $widgetId: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid2$row0",
                                                                            class: "row",
                                                                            style: void 0,
                                                                            content: [
                                                                              /* @__PURE__ */ React.createElement(
                                                                                $Div,
                                                                                {
                                                                                  key: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid2$row0$column0",
                                                                                  $widgetId: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid2$row0$column0",
                                                                                  class: "col-lg col-md col",
                                                                                  style: void 0,
                                                                                  content: [
                                                                                    /* @__PURE__ */ React.createElement(
                                                                                      $Text,
                                                                                      {
                                                                                        key: "p.MyFirstAIBot.BotConfig_Overview.text2",
                                                                                        $widgetId: "p.MyFirstAIBot.BotConfig_Overview.text2",
                                                                                        class: "mx-name-text2 spacing-outer-bottom-medium",
                                                                                        style: void 0,
                                                                                        caption: selectTranslation([
                                                                                          ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "literal", "value": "Knowledge Base Retrievals (available in the chat)" }, "args": {} }
                                                                                          })
                                                                                        ]),
                                                                                        renderMode: "h4"
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
                                                                            key: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid2$row1",
                                                                            $widgetId: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid2$row1",
                                                                            class: "row",
                                                                            style: void 0,
                                                                            content: [
                                                                              /* @__PURE__ */ React.createElement(
                                                                                $Div,
                                                                                {
                                                                                  key: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid2$row1$column0",
                                                                                  $widgetId: "p.MyFirstAIBot.BotConfig_Overview.layoutGrid2$row1$column0",
                                                                                  class: "col-lg col-md col",
                                                                                  style: void 0,
                                                                                  content: [
                                                                                    /* @__PURE__ */ React.createElement(
                                                                                      $Datagrid,
                                                                                      {
                                                                                        key: "p.MyFirstAIBot.BotConfig_Overview.dataGrid2_1",
                                                                                        $widgetId: "p.MyFirstAIBot.BotConfig_Overview.dataGrid2_1",
                                                                                        datasource: AssociationObjectListProperty({
                                                                                          "dataSourceId": "p.15",
                                                                                          "entity": "MyFirstAIBot.DeployedKBRetrieval",
                                                                                          "scope": "p.MyFirstAIBot.BotConfig_Overview.dataView1",
                                                                                          "operationId": "B5pw4ivUV1yHFw9Cnwz5Hw"
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
                                                                                              "entity": "MyFirstAIBot.DeployedKBRetrieval",
                                                                                              "attribute": "Name",
                                                                                              "attributeType": "String",
                                                                                              "sortable": true,
                                                                                              "filterable": true,
                                                                                              "dataSourceId": "p.15",
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
                                                                                                  key: "p.MyFirstAIBot.BotConfig_Overview.textFilter3",
                                                                                                  $widgetId: "p.MyFirstAIBot.BotConfig_Overview.textFilter3",
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
                                                                                            "width": "manual",
                                                                                            "minWidth": "auto",
                                                                                            "minWidthLimit": 100,
                                                                                            "size": 4,
                                                                                            "alignment": "left",
                                                                                            "wrapText": false
                                                                                          },
                                                                                          {
                                                                                            "showContentAs": "attribute",
                                                                                            "attribute": ListAttributeProperty({
                                                                                              "path": "",
                                                                                              "entity": "MyFirstAIBot.DeployedKBRetrieval",
                                                                                              "attribute": "Description",
                                                                                              "attributeType": "String",
                                                                                              "sortable": true,
                                                                                              "filterable": true,
                                                                                              "dataSourceId": "p.15",
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
                                                                                                  key: "p.MyFirstAIBot.BotConfig_Overview.textFilter4",
                                                                                                  $widgetId: "p.MyFirstAIBot.BotConfig_Overview.textFilter4",
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
                                                                                            "width": "manual",
                                                                                            "minWidth": "auto",
                                                                                            "minWidthLimit": 100,
                                                                                            "size": 6,
                                                                                            "alignment": "left",
                                                                                            "wrapText": false
                                                                                          },
                                                                                          {
                                                                                            "showContentAs": "customContent",
                                                                                            "attribute": ListAttributeProperty({
                                                                                              "path": "",
                                                                                              "entity": "MyFirstAIBot.DeployedKBRetrieval",
                                                                                              "attribute": "Name",
                                                                                              "attributeType": "String",
                                                                                              "sortable": true,
                                                                                              "filterable": true,
                                                                                              "dataSourceId": "p.15",
                                                                                              "isList": false
                                                                                            }),
                                                                                            "content": TemplatedWidgetProperty({
                                                                                              "dataSourceId": "p.15",
                                                                                              "editable": false,
                                                                                              "children": () => [
                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                  $ConditionalVisibilityWrapper,
                                                                                                  {
                                                                                                    key: "p.MyFirstAIBot.BotConfig_Overview.actionButton8$visibility",
                                                                                                    $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton8$visibility",
                                                                                                    visible: ExpressionProperty({
                                                                                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                                                    }),
                                                                                                    contents: [
                                                                                                      /* @__PURE__ */ React.createElement(
                                                                                                        $ActionButton,
                                                                                                        {
                                                                                                          key: "p.MyFirstAIBot.BotConfig_Overview.actionButton8",
                                                                                                          $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton8",
                                                                                                          buttonId: "p.MyFirstAIBot.BotConfig_Overview.actionButton8",
                                                                                                          class: "mx-name-actionButton8 btn-lg",
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
                                                                                                              ""
                                                                                                            ])
                                                                                                          }),
                                                                                                          icon: WebIconProperty({
                                                                                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-pencil" }
                                                                                                          }),
                                                                                                          action: ActionProperty({
                                                                                                            "action": { "type": "openPage", "argMap": { "param$DeployedKBRetrieval": { "widget": "p.MyFirstAIBot.BotConfig_Overview.dataGrid2_1", "source": "object" } }, "config": { "name": "MyFirstAIBot/DeployedKBRetrieval_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                                    key: "p.MyFirstAIBot.BotConfig_Overview.actionButton9$visibility",
                                                                                                    $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton9$visibility",
                                                                                                    visible: ExpressionProperty({
                                                                                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                                                    }),
                                                                                                    contents: [
                                                                                                      /* @__PURE__ */ React.createElement(
                                                                                                        $ActionButton,
                                                                                                        {
                                                                                                          key: "p.MyFirstAIBot.BotConfig_Overview.actionButton9",
                                                                                                          $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton9",
                                                                                                          buttonId: "p.MyFirstAIBot.BotConfig_Overview.actionButton9",
                                                                                                          class: "mx-name-actionButton9 btn-lg",
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
                                                                                                              ""
                                                                                                            ])
                                                                                                          }),
                                                                                                          icon: WebIconProperty({
                                                                                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-trash-can" }
                                                                                                          }),
                                                                                                          action: ActionProperty({
                                                                                                            "action": { "type": "callMicroflow", "argMap": { "DeployedKBRetrieval": { "widget": "p.MyFirstAIBot.BotConfig_Overview.dataGrid2_1", "source": "object" } }, "config": { "operationId": "5mKCO5xcR1GFrJCXjczTXA", "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure?"]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                        onClickTrigger: "double",
                                                                                        onClick: ListActionProperty({
                                                                                          "action": { "type": "openPage", "argMap": { "param$DeployedKBRetrieval": { "widget": "p.MyFirstAIBot.BotConfig_Overview.dataGrid2_1", "source": "object" } }, "config": { "name": "MyFirstAIBot/DeployedKBRetrieval_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                                          "abortOnServerValidation": false,
                                                                                          "dataSourceId": "p.15",
                                                                                          "argumentTypes": {}
                                                                                        }),
                                                                                        onSelectionChange: void 0,
                                                                                        columnsSortable: true,
                                                                                        columnsResizable: true,
                                                                                        columnsDraggable: true,
                                                                                        columnsHidable: false,
                                                                                        configurationStorageType: "attribute",
                                                                                        filtersPlaceholder: [
                                                                                          /* @__PURE__ */ React.createElement(
                                                                                            $ConditionalVisibilityWrapper,
                                                                                            {
                                                                                              key: "p.MyFirstAIBot.BotConfig_Overview.actionButton10$visibility",
                                                                                              $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton10$visibility",
                                                                                              visible: ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                                              }),
                                                                                              contents: [
                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                  $ActionButton,
                                                                                                  {
                                                                                                    key: "p.MyFirstAIBot.BotConfig_Overview.actionButton10",
                                                                                                    $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton10",
                                                                                                    buttonId: "p.MyFirstAIBot.BotConfig_Overview.actionButton10",
                                                                                                    class: "mx-name-actionButton10 spacing-outer-bottom",
                                                                                                    style: void 0,
                                                                                                    tabIndex: void 0,
                                                                                                    renderType: "button",
                                                                                                    role: void 0,
                                                                                                    buttonClass: "btn-success",
                                                                                                    caption: selectTranslation([
                                                                                                      ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "literal", "value": "New Retrieval" }, "args": {} }
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
                                                                                                      "action": { "type": "callMicroflow", "argMap": { "BotConfig": { "widget": "p.MyFirstAIBot.BotConfig_Overview.grid1", "source": "selection" } }, "config": { "operationId": "7753VpuVYlmYk7+f4kFmHg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                ],
                                                                ariaHidden: false
                                                              }
                                                            )
                                                          ]
                                                        }
                                                      )
                                                    ],
                                                    hideFooter: false,
                                                    footer: void 0
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
                          },
                          {
                            "name": "tabPage2",
                            "caption": TextProperty({
                              "value": selectTranslation([
                                "Knowledge Base Content"
                              ])
                            }),
                            "isDelayed": false,
                            "refreshOnShow": false,
                            "content": [
                              /* @__PURE__ */ React.createElement(
                                $Datagrid,
                                {
                                  key: "p.MyFirstAIBot.BotConfig_Overview.dataGrid2_2",
                                  $widgetId: "p.MyFirstAIBot.BotConfig_Overview.dataGrid2_2",
                                  datasource: DatabaseObjectListProperty({
                                    "dataSourceId": "p.22",
                                    "entity": "MyFirstAIBot.CustomKnowledgeBase",
                                    "operationId": "Cbgz5egeUlOGiDPmSAsE4g",
                                    "sort": []
                                  }),
                                  refreshInterval: 0,
                                  columns: [
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "MyFirstAIBot.CustomKnowledgeBase",
                                        "attribute": "Content",
                                        "attributeType": "String",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.22",
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
                                          "expression": { "expr": { "type": "literal", "value": "Content" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridTextFilter,
                                          {
                                            key: "p.MyFirstAIBot.BotConfig_Overview.textFilter5",
                                            $widgetId: "p.MyFirstAIBot.BotConfig_Overview.textFilter5",
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
                                            class: "mx-name-textFilter5",
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
                                        "entity": "MyFirstAIBot.CustomKnowledgeBase",
                                        "attribute": "Content",
                                        "attributeType": "String",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.22",
                                        "isList": false
                                      }),
                                      "content": TemplatedWidgetProperty({
                                        "dataSourceId": "p.22",
                                        "editable": false,
                                        "children": () => [
                                          /* @__PURE__ */ React.createElement(
                                            $ConditionalVisibilityWrapper,
                                            {
                                              key: "p.MyFirstAIBot.BotConfig_Overview.actionButton4$visibility",
                                              $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton4$visibility",
                                              visible: ExpressionProperty({
                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                              }),
                                              contents: [
                                                /* @__PURE__ */ React.createElement(
                                                  $ActionButton,
                                                  {
                                                    key: "p.MyFirstAIBot.BotConfig_Overview.actionButton4",
                                                    $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton4",
                                                    buttonId: "p.MyFirstAIBot.BotConfig_Overview.actionButton4",
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
                                                        ""
                                                      ])
                                                    }),
                                                    icon: WebIconProperty({
                                                      "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-pencil" }
                                                    }),
                                                    action: ActionProperty({
                                                      "action": { "type": "openPage", "argMap": { "param$CustomKnowledgeBase": { "widget": "p.MyFirstAIBot.BotConfig_Overview.dataGrid2_2", "source": "object" } }, "config": { "name": "MyFirstAIBot/CustomKnowledgeBase_NewEdit.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                              key: "p.MyFirstAIBot.BotConfig_Overview.actionButton5$visibility",
                                              $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton5$visibility",
                                              visible: ExpressionProperty({
                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                              }),
                                              contents: [
                                                /* @__PURE__ */ React.createElement(
                                                  $ActionButton,
                                                  {
                                                    key: "p.MyFirstAIBot.BotConfig_Overview.actionButton5",
                                                    $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton5",
                                                    buttonId: "p.MyFirstAIBot.BotConfig_Overview.actionButton5",
                                                    class: "mx-name-actionButton5 btn-lg",
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
                                                        ""
                                                      ])
                                                    }),
                                                    icon: WebIconProperty({
                                                      "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-trash-can" }
                                                    }),
                                                    action: ActionProperty({
                                                      "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.MyFirstAIBot.BotConfig_Overview.dataGrid2_2", "source": "object" } }, "config": { "closePage": false, "operationId": "CZcORJeiCVa1HnqCFTrMHg" }, "disabledDuringExecution": true },
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
                                  onClickTrigger: "single",
                                  onClick: void 0,
                                  onSelectionChange: void 0,
                                  filtersPlaceholder: [
                                    /* @__PURE__ */ React.createElement(
                                      $ConditionalVisibilityWrapper,
                                      {
                                        key: "p.MyFirstAIBot.BotConfig_Overview.actionButton7$visibility",
                                        $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton7$visibility",
                                        visible: ExpressionProperty({
                                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                        }),
                                        contents: [
                                          /* @__PURE__ */ React.createElement(
                                            $ActionButton,
                                            {
                                              key: "p.MyFirstAIBot.BotConfig_Overview.actionButton7",
                                              $widgetId: "p.MyFirstAIBot.BotConfig_Overview.actionButton7",
                                              buttonId: "p.MyFirstAIBot.BotConfig_Overview.actionButton7",
                                              class: "mx-name-actionButton7",
                                              style: void 0,
                                              tabIndex: void 0,
                                              renderType: "button",
                                              role: void 0,
                                              buttonClass: "btn-primary",
                                              caption: selectTranslation([
                                                ExpressionProperty({
                                                  "expression": { "expr": { "type": "literal", "value": "New Custom knowledge base" }, "args": {} }
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
                                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "IhXfU5foqFOIQQICE3eIug", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                "abortOnServerValidation": true
                                              })
                                            }
                                          )
                                        ]
                                      }
                                    )
                                  ],
                                  itemSelectionMethod: "checkbox",
                                  itemSelectionMode: "clear",
                                  showSelectAllToggle: true,
                                  enableSelectAll: false,
                                  keepSelection: false,
                                  selectionCounterPosition: "bottom",
                                  loadingType: "spinner",
                                  refreshIndicator: false,
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
                                  class: "mx-name-dataGrid2_2",
                                  style: void 0,
                                  tabIndex: void 0
                                }
                              )
                            ]
                          }
                        ],
                        hoistedSelections: [
                          "p.MyFirstAIBot.BotConfig_Overview.grid1"
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
  "Bot Configuration Overview"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_TopBar.Main": region$Main
};

export { classes, content, style, title };
