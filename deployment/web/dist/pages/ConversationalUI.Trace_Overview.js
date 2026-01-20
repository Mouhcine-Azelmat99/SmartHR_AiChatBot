import { reactExports, asPluginWidgets, Fragment, addEnumerations, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import { AssociationObjectListProperty } from '../AssociationObjectListProperty-Bq1c4uSS.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-ALaVt2gM.js';
import '../AttributeProperty-DLZOHEVl.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-Cmtbu3ww.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-Bivq5vCz.js';
import { ListActionProperty } from '../ListActionProperty-CnTTvC2T.js';
import { ListAttributeProperty } from '../ListAttributeProperty-Dsd9EADd.js';
import { ListExpressionProperty } from '../ListExpressionProperty-CLcrpJsE.js';
import { MicroflowObjectListProperty } from '../MicroflowObjectListProperty-BR95nzdd.js';
import { MicroflowObjectProperty } from '../MicroflowObjectProperty-z5djVxQ4.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-V0FBuqFr.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { FormGroup, ValidationProperty } from '../FormGroup-Clh5YKWK.js';
import { WebIconProperty } from '../WebIconProperty-MLEi2sc0.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-C3LJYoNm.js';
import { Q, _, pt } from '../shared-charts-BA-GB2Lb.js';
import { ComboboxWidgetModule } from '../Combobox-kwA1_Kpz.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { Container } from '../Container-LyamVXag.js';
import { DatagridWidgetModule } from '../Datagrid-BLwkw0WZ.js';
import { DataView } from '../DataView-BlzHzMI2.js';
import '../Fragment-C-45CGtT.js';
import { GalleryWidgetModule } from '../Gallery-crF9TXk7.js';
import { ImageWidgetModule } from '../Image-CNc12AI2.js';
import { ListView } from '../ListView-hken1fZ0.js';
import { Text } from '../Text-mON8QAZM.js';
import { TooltipWidgetModule } from '../Tooltip-Ca2Kf3P2.js';
import { content as content$1 } from '../ConversationalUI.Layout_MasterBase-DJ46kSmY.js';
import { AttributeProperty } from '../CTQxk13g-Cpo2G8Em.js';
import '../BMuJrVqQ-CCtMHjkn.js';
import '../CxMFexew-Djrc9cTX.js';
import '../UeptbR6O-BTpvn_SV.js';
import '../uEIG9e6s-BfLfin4i.js';
import '../CkBXggmw-DpOc9R4C.js';
import '../CxoxYXlg-DglkwELR.js';
import '../CTcC6PjV-DYXKqvux.js';
import '../index-BuuMIVCm.js';
import '../bdxqAC6d-DXeZKQMd.js';
import '../InlineText-D4EmJMFt.js';
import '../Atlas_Core.Atlas_TopBar-CKgSzJ5B.js';
import '../Div-DznaFJxI.js';
import '../SidebarToggle-Bw-HLNop.js';
import '../D7vCi_Rn-BKFLWyMt.js';
import '../CGlz0zm4-DhbfSt7O.js';
import '../ScrollContainer-U0HrQ4Hh.js';
import '../MenuBar-BOhekOWd.js';

function s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var l,d={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var u,c=(l||(l=1,u=d,function(){var e={}.hasOwnProperty;function o(){for(var t=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var n=typeof i;if("string"===n||"number"===n)t.push(i);else if(Array.isArray(i)){if(i.length){var a=o.apply(null,i);a&&t.push(a);}}else if("object"===n){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){t.push(i.toString());continue}for(var s in i)e.call(i,s)&&i[s]&&t.push(s);}}}return t.join(" ")}u.exports?(o.default=o,u.exports=o):window.classNames=o;}()),d.exports),g=s(c);const h={xaxis:{fixedrange:!0,gridcolor:"#d7d7d7",zeroline:!1,zerolinecolor:void 0},yaxis:{fixedrange:!0,gridcolor:"#d7d7d7",zeroline:!0,zerolinecolor:"#d7d7d7",rangemode:"tozero"}},p={responsive:!0},f={type:"bar",orientation:"v"},m=reactExports.memo((function(t){var r,s;const l=reactExports.useMemo((()=>({...h,barmode:t.barmode})),[t.barmode]),d=Q(t.series,reactExports.useCallback(((e,o,t)=>{let{getExpressionValue:r}=t;const i="static"===e.dataSet?e.staticBarColor:e.dynamicBarColor;return {marker:{color:i?r(i,o.dataSourceItems):void 0}}}),[]));return reactExports.createElement(_,{type:"ColumnChart",className:g("widget-column-chart",t.class),data:null!=d?d:[],width:t.width,widthUnit:t.widthUnit,height:t.height,heightUnit:t.heightUnit,showLegend:t.showLegend,xAxisLabel:null===(r=t.xAxisLabel)||void 0===r?void 0:r.value,yAxisLabel:null===(s=t.yAxisLabel)||void 0===s?void 0:s.value,gridLinesMode:t.gridLines,customLayout:t.customLayout,customConfig:t.customConfigurations,layoutOptions:l,configOptions:p,seriesOptions:f,enableThemeConfig:t.enableThemeConfig,playground:t.playground})}),pt);

var ColumnChartWidgetModule = /*#__PURE__*/Object.freeze({
	__proto__: null,
	ColumnChart: m
});

var undefined$1 = undefined;

const React = { createElement: reactExports.createElement };
const ColumnChart = Object.getOwnPropertyDescriptor(ColumnChartWidgetModule, "ColumnChart")?.value || Object.getOwnPropertyDescriptor(ColumnChartWidgetModule, "default")?.value;
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const Gallery = Object.getOwnPropertyDescriptor(GalleryWidgetModule, "Gallery")?.value || Object.getOwnPropertyDescriptor(GalleryWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;
const { $Fragment, $DataView, $Container, $Text, $ConditionalVisibilityWrapper, $ActionButton, $FormGroup, $Combobox, $Gallery, $Image, $Tooltip, $ColumnChart, $Datagrid, $ListView } = asPluginWidgets({ Fragment, DataView, Container, Text, ConditionalVisibilityWrapper, ActionButton, FormGroup, Combobox, Gallery, Image, Tooltip, ColumnChart, Datagrid, ListView });
addEnumerations({
  "ConversationalUI.ENUM_TimeRange": [
    [
      "Day",
      selectTranslation([
        "D"
      ])
    ],
    [
      "Week",
      selectTranslation([
        "W"
      ])
    ],
    [
      "Month",
      selectTranslation([
        "M"
      ])
    ],
    [
      "MonthToDate",
      selectTranslation([
        "MTD"
      ])
    ],
    [
      "_3Month",
      selectTranslation([
        "3M"
      ])
    ],
    [
      "_6Month",
      selectTranslation([
        "6M"
      ])
    ],
    [
      "Custom",
      selectTranslation([
        "Custom"
      ])
    ],
    [
      "All",
      selectTranslation([
        "All"
      ])
    ]
  ],
  "ConversationalUI.ENUM_ChartType": [
    [
      "Number_of_Invocations",
      selectTranslation([
        "Number of Invocations"
      ])
    ],
    [
      "Total_Conversations",
      selectTranslation([
        "Total Conversations"
      ])
    ],
    [
      "Total_Tokens",
      selectTranslation([
        "Total Tokens"
      ])
    ]
  ]
});
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Fragment,
    {
      key: "p.ConversationalUI.Trace_Overview.snippetCall1",
      $widgetId: "p.ConversationalUI.Trace_Overview.snippetCall1",
      content: [
        /* @__PURE__ */ React.createElement(
          $DataView,
          {
            key: "p.ConversationalUI.Snippet_TraceOverview.dataView1",
            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.dataView1",
            class: "mx-name-dataView1 height-full form-horizontal",
            style: void 0,
            tabIndex: void 0,
            object: MicroflowObjectProperty({
              "dataSourceId": "p.51",
              "editable": true,
              "operationId": "XmooNb8Qyl2V56GC7EuOKg",
              "argMap": {}
            }),
            emptyMessage: TextProperty({
              "value": selectTranslation([
                ""
              ])
            }),
            body: [
              /* @__PURE__ */ React.createElement(
                $Container,
                {
                  key: "p.ConversationalUI.Snippet_TraceOverview.container19",
                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container19",
                  class: "mx-name-container19 traces-page-content-container",
                  style: void 0,
                  renderMode: "div",
                  onClick: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.Snippet_TraceOverview.container2",
                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container2",
                        class: "mx-name-container2 traces-content",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Snippet_TraceOverview.container13",
                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container13",
                              class: "mx-name-container13 card",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Snippet_TraceOverview.container7",
                                    $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container7",
                                    class: "mx-name-container7 card-header",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.ConversationalUI.Snippet_TraceOverview.text2",
                                          $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text2",
                                          class: "mx-name-text2",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Traces" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "h1"
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Snippet_TraceOverview.container8",
                                          $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container8",
                                          class: "mx-name-container8 pageheader-flex-container",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceOverview.container10",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container10",
                                                class: "mx-name-container10 pageheader-flex-items",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.container11",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container11",
                                                      class: "mx-name-container11",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ConditionalVisibilityWrapper,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.actionButton3$visibility",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton3$visibility",
                                                            visible: ExpressionProperty({
                                                              "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ShowFilterActive" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                            }),
                                                            contents: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $ActionButton,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.actionButton3",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton3",
                                                                  buttonId: "p.ConversationalUI.Snippet_TraceOverview.actionButton3",
                                                                  class: "mx-name-actionButton3 spacing-outer-right-small btn-bordered",
                                                                  style: void 0,
                                                                  tabIndex: void 0,
                                                                  renderType: "button",
                                                                  role: void 0,
                                                                  buttonClass: "btn-primary",
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "Filter" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  tooltip: TextProperty({
                                                                    "value": selectTranslation([
                                                                      ""
                                                                    ])
                                                                  }),
                                                                  icon: WebIconProperty({
                                                                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-filter" }
                                                                  }),
                                                                  action: ActionProperty({
                                                                    "action": { "type": "openPage", "argMap": { "param$TraceFiltering": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } }, "config": { "name": "ConversationalUI/TraceFiltering_Edit.page.xml", "location": "modal", "width": 700, "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.actionButton4$visibility",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton4$visibility",
                                                            visible: ExpressionProperty({
                                                              "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "variable", "variable": "currentObject", "path": "ShowFilterActive" }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                            }),
                                                            contents: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $ActionButton,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.actionButton4",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton4",
                                                                  buttonId: "p.ConversationalUI.Snippet_TraceOverview.actionButton4",
                                                                  class: "mx-name-actionButton4 spacing-outer-right-small",
                                                                  style: void 0,
                                                                  tabIndex: void 0,
                                                                  renderType: "button",
                                                                  role: void 0,
                                                                  buttonClass: "btn-primary",
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "Filters (active)" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  tooltip: TextProperty({
                                                                    "value": selectTranslation([
                                                                      ""
                                                                    ])
                                                                  }),
                                                                  icon: WebIconProperty({
                                                                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-filter" }
                                                                  }),
                                                                  action: ActionProperty({
                                                                    "action": { "type": "openPage", "argMap": { "param$TraceFiltering": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } }, "config": { "name": "ConversationalUI/TraceFiltering_Edit.page.xml", "location": "modal", "width": 700, "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.actionButton5$visibility",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton5$visibility",
                                                            visible: ExpressionProperty({
                                                              "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "variable", "variable": "currentObject", "path": "ShowFilterActive" }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                            }),
                                                            contents: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $ActionButton,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.actionButton5",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton5",
                                                                  buttonId: "p.ConversationalUI.Snippet_TraceOverview.actionButton5",
                                                                  class: "mx-name-actionButton5 btn-text-danger spacing-outer-right-small",
                                                                  style: void 0,
                                                                  tabIndex: void 0,
                                                                  renderType: "button",
                                                                  role: void 0,
                                                                  buttonClass: "btn-default",
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "Reset Filter(s)" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  tooltip: TextProperty({
                                                                    "value": selectTranslation([
                                                                      ""
                                                                    ])
                                                                  }),
                                                                  icon: void 0,
                                                                  action: ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": { "TraceFiltering": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } }, "config": { "operationId": "Ijy6Ttpk5FecG+TKEUzgVw", "progress": { "message": selectTranslation([""]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.container12",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container12",
                                                      class: "mx-name-container12 row-right-aligned",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.container15",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container15",
                                                            class: "mx-name-container15 spacing-outer-right-small",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $FormGroup,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.comboBox1$formGroup",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.comboBox1$formGroup",
                                                                  class: "mx-name-comboBox1 combobox-filter-height spacing-outer-right-small spacing-outer-bottom-none",
                                                                  style: void 0,
                                                                  control: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Combobox,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.comboBox1",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.comboBox1",
                                                                        source: "context",
                                                                        optionsSourceType: "enumeration",
                                                                        attributeEnumeration: AttributeProperty({
                                                                          "scope": "p.ConversationalUI.Snippet_TraceOverview.dataView1",
                                                                          "path": "",
                                                                          "entity": "ConversationalUI.TraceFiltering",
                                                                          "attribute": "ChartType",
                                                                          "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                          "isList": false
                                                                        }),
                                                                        optionsSourceDatabaseDataSource: void 0,
                                                                        optionsSourceAssociationCaptionType: "attribute",
                                                                        optionsSourceDatabaseCaptionType: "attribute",
                                                                        optionsSourceDatabaseDefaultValue: void 0,
                                                                        optionsSourceAssociationDataSource: void 0,
                                                                        optionsSourceStaticDataSource: [],
                                                                        emptyOptionText: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        filterType: "none",
                                                                        noOptionsText: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        clearable: false,
                                                                        optionsSourceAssociationCustomContentType: "no",
                                                                        optionsSourceDatabaseCustomContentType: "no",
                                                                        staticDataSourceCustomContentType: "no",
                                                                        showFooter: false,
                                                                        menuFooterContent: void 0,
                                                                        selectionMethod: "checkbox",
                                                                        selectedItemsStyle: "text",
                                                                        selectAllButton: false,
                                                                        selectAllButtonCaption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        readOnlyStyle: "text",
                                                                        onChangeEvent: ActionProperty({
                                                                          "action": { "type": "callMicroflow", "argMap": { "TraceFiltering": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } }, "config": { "operationId": "9XO2vRYkNVST8f+jJkNvbQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                          "argumentTypes": {}
                                                                        }),
                                                                        onEnterEvent: void 0,
                                                                        onLeaveEvent: void 0,
                                                                        ariaRequired: false,
                                                                        clearButtonAriaLabel: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        removeValueAriaLabel: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        a11ySelectedValue: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        a11yOptionsAvailable: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        a11yInstructions: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        lazyLoading: true,
                                                                        loadingType: "spinner",
                                                                        tabIndex: void 0,
                                                                        id: DerivedUniqueIdProperty({
                                                                          "widgetId": "p.ConversationalUI.Snippet_TraceOverview.comboBox1"
                                                                        })
                                                                      }
                                                                    )
                                                                  ],
                                                                  caption: void 0,
                                                                  labelFor: DerivedUniqueIdProperty({
                                                                    "widgetId": "p.ConversationalUI.Snippet_TraceOverview.comboBox1"
                                                                  }),
                                                                  width: 3,
                                                                  orientation: "vertical",
                                                                  hasError: ValidationProperty({
                                                                    "inputWidgetId": "p.ConversationalUI.Snippet_TraceOverview.comboBox1"
                                                                  })
                                                                }
                                                              )
                                                            ],
                                                            ariaHidden: false
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.container34",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container34",
                                                            class: "mx-name-container34 segmented-control",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.actionButton21$visibility",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton21$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "Day" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "MonthToDate" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "_3Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "_6Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "Custom" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "All" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": null }] } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ActionButton,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.actionButton21",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton21",
                                                                        buttonId: "p.ConversationalUI.Snippet_TraceOverview.actionButton21",
                                                                        class: "mx-name-actionButton21",
                                                                        style: void 0,
                                                                        tabIndex: void 0,
                                                                        renderType: "button",
                                                                        role: void 0,
                                                                        buttonClass: "btn-default",
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Week" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        tooltip: TextProperty({
                                                                          "value": selectTranslation([
                                                                            ""
                                                                          ])
                                                                        }),
                                                                        icon: void 0,
                                                                        action: ActionProperty({
                                                                          "action": { "type": "callMicroflow", "argMap": { "TraceFiltering": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } }, "config": { "operationId": "52bHbRP89F6lx9PTC3Z3uA", "progress": { "message": selectTranslation(["Updating graph.."]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.actionButton13$visibility",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton13$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "Week" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ActionButton,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.actionButton13",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton13",
                                                                        buttonId: "p.ConversationalUI.Snippet_TraceOverview.actionButton13",
                                                                        class: "mx-name-actionButton13",
                                                                        style: void 0,
                                                                        tabIndex: void 0,
                                                                        renderType: "button",
                                                                        role: void 0,
                                                                        buttonClass: "btn-primary",
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Week" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        tooltip: TextProperty({
                                                                          "value": selectTranslation([
                                                                            ""
                                                                          ])
                                                                        }),
                                                                        icon: void 0,
                                                                        action: ActionProperty({
                                                                          "action": { "type": "callMicroflow", "argMap": { "TraceFiltering": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } }, "config": { "operationId": "52bHbRP89F6lx9PTC3Z3uA", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.actionButton23$visibility",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton23$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "Day" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "Week" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "MonthToDate" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "_3Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "_6Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "Custom" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "All" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": null }] } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ActionButton,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.actionButton23",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton23",
                                                                        buttonId: "p.ConversationalUI.Snippet_TraceOverview.actionButton23",
                                                                        class: "mx-name-actionButton23",
                                                                        style: void 0,
                                                                        tabIndex: void 0,
                                                                        renderType: "button",
                                                                        role: void 0,
                                                                        buttonClass: "btn-default",
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Month" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        tooltip: TextProperty({
                                                                          "value": selectTranslation([
                                                                            ""
                                                                          ])
                                                                        }),
                                                                        icon: void 0,
                                                                        action: ActionProperty({
                                                                          "action": { "type": "callMicroflow", "argMap": { "TraceFiltering": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } }, "config": { "operationId": "pfoTHLgublup/CdNLaQiWw", "progress": { "message": selectTranslation(["Updating graph.."]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.actionButton15$visibility",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton15$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "Month" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ActionButton,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.actionButton15",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton15",
                                                                        buttonId: "p.ConversationalUI.Snippet_TraceOverview.actionButton15",
                                                                        class: "mx-name-actionButton15",
                                                                        style: void 0,
                                                                        tabIndex: void 0,
                                                                        renderType: "button",
                                                                        role: void 0,
                                                                        buttonClass: "btn-primary",
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Month" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        tooltip: TextProperty({
                                                                          "value": selectTranslation([
                                                                            ""
                                                                          ])
                                                                        }),
                                                                        icon: void 0,
                                                                        action: ActionProperty({
                                                                          "action": { "type": "callMicroflow", "argMap": { "TraceFiltering": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } }, "config": { "operationId": "pfoTHLgublup/CdNLaQiWw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.actionButton24$visibility",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton24$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "Day" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "Week" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "MonthToDate" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "_3Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "Custom" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "All" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": null }] } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ActionButton,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.actionButton24",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton24",
                                                                        buttonId: "p.ConversationalUI.Snippet_TraceOverview.actionButton24",
                                                                        class: "mx-name-actionButton24",
                                                                        style: void 0,
                                                                        tabIndex: void 0,
                                                                        renderType: "button",
                                                                        role: void 0,
                                                                        buttonClass: "btn-default",
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "6 Months" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        tooltip: TextProperty({
                                                                          "value": selectTranslation([
                                                                            ""
                                                                          ])
                                                                        }),
                                                                        icon: void 0,
                                                                        action: ActionProperty({
                                                                          "action": { "type": "callMicroflow", "argMap": { "TraceFiltering": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } }, "config": { "operationId": "6Vlm7+D0h1GTsQWwz7EHIg", "progress": { "message": selectTranslation(["Updating graph.."]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.actionButton16$visibility",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton16$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "_6Month" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ActionButton,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.actionButton16",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton16",
                                                                        buttonId: "p.ConversationalUI.Snippet_TraceOverview.actionButton16",
                                                                        class: "mx-name-actionButton16",
                                                                        style: void 0,
                                                                        tabIndex: void 0,
                                                                        renderType: "button",
                                                                        role: void 0,
                                                                        buttonClass: "btn-primary",
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "6 Months" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        tooltip: TextProperty({
                                                                          "value": selectTranslation([
                                                                            ""
                                                                          ])
                                                                        }),
                                                                        icon: void 0,
                                                                        action: ActionProperty({
                                                                          "action": { "type": "callMicroflow", "argMap": { "TraceFiltering": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } }, "config": { "operationId": "6Vlm7+D0h1GTsQWwz7EHIg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.actionButton26$visibility",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton26$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "Day" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "Week" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "MonthToDate" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "_3Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "_6Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "All" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": null }] } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ActionButton,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.actionButton26",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton26",
                                                                        buttonId: "p.ConversationalUI.Snippet_TraceOverview.actionButton26",
                                                                        class: "mx-name-actionButton26",
                                                                        style: void 0,
                                                                        tabIndex: void 0,
                                                                        renderType: "button",
                                                                        role: void 0,
                                                                        buttonClass: "btn-default",
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Custom" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        tooltip: TextProperty({
                                                                          "value": selectTranslation([
                                                                            ""
                                                                          ])
                                                                        }),
                                                                        icon: void 0,
                                                                        action: ActionProperty({
                                                                          "action": { "type": "openPage", "argMap": { "param$TraceFiltering": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } }, "config": { "name": "ConversationalUI/TraceFiltering_EditDate.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.actionButton17$visibility",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton17$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeRange" }, { "type": "literal", "value": "Custom" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ActionButton,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.actionButton17",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton17",
                                                                        buttonId: "p.ConversationalUI.Snippet_TraceOverview.actionButton17",
                                                                        class: "mx-name-actionButton17",
                                                                        style: void 0,
                                                                        tabIndex: void 0,
                                                                        renderType: "button",
                                                                        role: void 0,
                                                                        buttonClass: "btn-primary",
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Custom" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        tooltip: TextProperty({
                                                                          "value": selectTranslation([
                                                                            ""
                                                                          ])
                                                                        }),
                                                                        icon: void 0,
                                                                        action: ActionProperty({
                                                                          "action": { "type": "openPage", "argMap": { "param$TraceFiltering": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } }, "config": { "name": "ConversationalUI/TraceFiltering_EditDate.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                        $Gallery,
                                        {
                                          key: "p.ConversationalUI.Snippet_TraceOverview.gallery1",
                                          $widgetId: "p.ConversationalUI.Snippet_TraceOverview.gallery1",
                                          filtersPlaceholder: void 0,
                                          datasource: DatabaseObjectListProperty({
                                            "dataSourceId": "p.22",
                                            "entity": "ConversationalUI.Filter",
                                            "scope": "p.ConversationalUI.Snippet_TraceOverview.dataView1",
                                            "operationId": "JUQ5EB2CXVKbbWa+9gSRsg",
                                            "sort": [],
                                            "arguments": {
                                              "currentObject": [
                                                "p.ConversationalUI.Snippet_TraceOverview.dataView1"
                                              ],
                                              "CurrentObject": [
                                                "p.ConversationalUI.Snippet_TraceOverview.dataView1"
                                              ]
                                            },
                                            "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "ConversationalUI.Filter_TraceFiltering", "context": "ConversationalUI.Filter", "attributeType": "ObjectReference" }, { "type": "variable", "name": "currentObject" }] }
                                          }),
                                          itemSelectionMode: "clear",
                                          keepSelection: false,
                                          content: TemplatedWidgetProperty({
                                            "dataSourceId": "p.22",
                                            "editable": false,
                                            "children": () => [
                                              /* @__PURE__ */ React.createElement(
                                                $Container,
                                                {
                                                  key: "p.ConversationalUI.Snippet_TraceOverview.container16",
                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container16",
                                                  class: "mx-name-container16 filter-tag",
                                                  style: void 0,
                                                  renderMode: "div",
                                                  onClick: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Container,
                                                      {
                                                        key: "p.ConversationalUI.Snippet_TraceOverview.container18",
                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container18",
                                                        class: "mx-name-container18",
                                                        style: void 0,
                                                        renderMode: "div",
                                                        onClick: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Container,
                                                            {
                                                              key: "p.ConversationalUI.Snippet_TraceOverview.container20",
                                                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container20",
                                                              class: "mx-name-container20 filter-item",
                                                              style: void 0,
                                                              renderMode: "div",
                                                              onClick: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.ConversationalUI.Snippet_TraceOverview.text3",
                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text3",
                                                                    class: "mx-name-text3 filter-text",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "FilterType" }, { "type": "literal", "value": "ConversationalUI.ENUM_FilterType" }] }, { "type": "literal", "value": ": " }] }, { "type": "variable", "variable": "currentObject", "path": "Content" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.gallery1", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "span"
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Image,
                                                                  {
                                                                    key: "p.ConversationalUI.Snippet_TraceOverview.image1",
                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceOverview.image1",
                                                                    datasource: "image",
                                                                    imageObject: WebStaticImageProperty({
                                                                      "image": { "uri": "img/ConversationalUI$Image_Traces$remove.svg" }
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
                                                                    onClick: ActionProperty({
                                                                      "action": { "type": "callMicroflow", "argMap": { "Filter": { "widget": "p.ConversationalUI.Snippet_TraceOverview.gallery1", "source": "object" } }, "config": { "operationId": "sHPgnMQL4F6bVtGDPnQfdQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                      "argumentTypes": {}
                                                                    }),
                                                                    alternativeText: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                      })
                                                                    ]),
                                                                    widthUnit: "pixels",
                                                                    width: 12,
                                                                    heightUnit: "pixels",
                                                                    height: 12,
                                                                    iconSize: 14,
                                                                    displayAs: "fullImage",
                                                                    responsive: true,
                                                                    class: "mx-name-image1 icon",
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
                                                  ],
                                                  ariaHidden: false
                                                }
                                              )
                                            ]
                                          }),
                                          refreshIndicator: false,
                                          desktopItems: 1,
                                          tabletItems: 1,
                                          phoneItems: 1,
                                          pageSize: 12,
                                          pagination: "loadMore",
                                          showTotalCount: false,
                                          showPagingButtons: "always",
                                          pagingPosition: "bottom",
                                          loadMoreButtonCaption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                            })
                                          ]),
                                          showEmptyPlaceholder: "none",
                                          emptyPlaceholder: void 0,
                                          itemClass: void 0,
                                          onClickTrigger: "single",
                                          onClick: void 0,
                                          onSelectionChange: void 0,
                                          stateStorageType: "attribute",
                                          storeFilters: false,
                                          storeSort: false,
                                          filterSectionTitle: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          emptyMessageTitle: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          ariaLabelListBox: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          ariaLabelItem: selectTranslation([
                                            void 0
                                          ]),
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
                                          selectionCountPosition: "bottom",
                                          clearSelectionButtonLabel: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                            })
                                          ]),
                                          class: "mx-name-gallery1 filter-gallery",
                                          style: void 0,
                                          tabIndex: void 0
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Snippet_TraceOverview.container37",
                                          $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container37",
                                          class: "mx-name-container37 filter-card",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceOverview.container43",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container43",
                                                class: "mx-name-container43",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.container5",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container5",
                                                      class: "mx-name-container5 spacing-outer-bottom-smaller",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.text13",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text13",
                                                            class: "mx-name-text13 font-weight-semibold",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Total invocations" }, "args": {} }
                                                              })
                                                            ]),
                                                            renderMode: "span"
                                                          }
                                                        )
                                                      ],
                                                      ariaHidden: false
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.container68$visibility",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container68$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalInvocations" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.container68",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container68",
                                                            class: "mx-name-container68 row-text-img",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.image19",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.image19",
                                                                  datasource: "icon",
                                                                  imageObject: void 0,
                                                                  defaultImageDynamic: void 0,
                                                                  imageUrl: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  imageIcon: WebIconProperty({
                                                                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-robot-head" }
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
                                                                  iconSize: 16,
                                                                  displayAs: "fullImage",
                                                                  responsive: true,
                                                                  class: "mx-name-image19 unset-img-width spacing-inner-top-smallest",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.text70",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text70",
                                                                  class: "mx-name-text70 font-size-medium font-weight-semibold",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalInvocations" }, { "type": "literal", "value": "{}" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
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
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.text85$visibility",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text85$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalInvocations" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.text85",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text85",
                                                            class: "mx-name-text85 font-size-medium font-weight-semibold",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "-" }, "args": {} }
                                                              })
                                                            ]),
                                                            renderMode: "span"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.text86$visibility",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text86$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalInvocations" }, { "type": "literalNumeric", "value": "0" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.text86",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text86",
                                                            class: "mx-name-text86 font-size-medium font-weight-semibold",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "0" }, "args": {} }
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
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceOverview.container74",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container74",
                                                class: "mx-name-container74",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.container4",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container4",
                                                      class: "mx-name-container4 spacing-outer-bottom-smaller",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.text21",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text21",
                                                            class: "mx-name-text21 font-weight-semibold",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Total conversations" }, "args": {} }
                                                              })
                                                            ]),
                                                            renderMode: "span"
                                                          }
                                                        )
                                                      ],
                                                      ariaHidden: false
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.container69$visibility",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container69$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalConversations" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.container69",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container69",
                                                            class: "mx-name-container69 row-text-img",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.image23",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.image23",
                                                                  datasource: "icon",
                                                                  imageObject: void 0,
                                                                  defaultImageDynamic: void 0,
                                                                  imageUrl: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  imageIcon: WebIconProperty({
                                                                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-message-bubble-typing" }
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
                                                                  iconSize: 16,
                                                                  displayAs: "fullImage",
                                                                  responsive: true,
                                                                  class: "mx-name-image23 unset-img-width spacing-inner-top-smallest",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.text71",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text71",
                                                                  class: "mx-name-text71 font-size-medium font-weight-semibold",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalConversations" }, { "type": "literal", "value": "{}" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
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
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.text83$visibility",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text83$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalConversations" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.text83",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text83",
                                                            class: "mx-name-text83 font-size-medium font-weight-semibold",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "-" }, "args": {} }
                                                              })
                                                            ]),
                                                            renderMode: "span"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.text84$visibility",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text84$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalConversations" }, { "type": "literalNumeric", "value": "0" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.text84",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text84",
                                                            class: "mx-name-text84 font-size-medium font-weight-semibold",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "0" }, "args": {} }
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
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceOverview.container75$visibility",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container75$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ConversationalUI.TraceFiltering_Agent" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.container75",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container75",
                                                      class: "mx-name-container75",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.container27",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container27",
                                                            class: "mx-name-container27 row-left-aligned spacing-outer-bottom-smallest",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.container47",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container47",
                                                                  class: "mx-name-container47",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Text,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.text22",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text22",
                                                                        class: "mx-name-text22 font-weight-semibold",
                                                                        style: void 0,
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Duration P50" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        renderMode: "span"
                                                                      }
                                                                    )
                                                                  ],
                                                                  ariaHidden: false
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Tooltip,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.tooltip4",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.tooltip4",
                                                                  trigger: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ConditionalVisibilityWrapper,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.actionButton25$visibility",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton25$visibility",
                                                                        visible: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                        }),
                                                                        contents: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $ActionButton,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceOverview.actionButton25",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton25",
                                                                              buttonId: "p.ConversationalUI.Snippet_TraceOverview.actionButton25",
                                                                              class: "mx-name-actionButton25 tooltip-info-icon btn-sm spacing-outer-bottom-none",
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
                                                                                  ""
                                                                                ])
                                                                              }),
                                                                              icon: WebIconProperty({
                                                                                "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$info_circle_grey.svg" }
                                                                              }),
                                                                              action: ActionProperty({
                                                                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                                                "abortOnServerValidation": true
                                                                              })
                                                                            }
                                                                          )
                                                                        ]
                                                                      }
                                                                    )
                                                                  ],
                                                                  renderMethod: "custom",
                                                                  htmlMessage: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.container28",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container28",
                                                                        class: "mx-name-container28 tooltip-container",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Container,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceOverview.container29",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container29",
                                                                              class: "mx-name-container29 tooltip-col",
                                                                              style: void 0,
                                                                              renderMode: "div",
                                                                              onClick: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceOverview.text5",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text5",
                                                                                    class: "mx-name-text5 text-normal",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "The\xA0P50 (50th Percentile) duration\xA0is the time by which\xA050% of the model or agents responses are completed. This gives you a sense of common performance without being heavily influenced by outliers." }, "args": {} }
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
                                                                        ariaHidden: false
                                                                      }
                                                                    )
                                                                  ],
                                                                  textMessage: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  tooltipPosition: "bottom",
                                                                  arrowPosition: "end",
                                                                  openOn: "hover",
                                                                  class: "mx-name-tooltip4 convui-tooltip",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              )
                                                            ],
                                                            ariaHidden: false
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.container73",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container73",
                                                            class: "mx-name-container73 row-text-img",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.image24",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.image24",
                                                                  datasource: "icon",
                                                                  imageObject: void 0,
                                                                  defaultImageDynamic: void 0,
                                                                  imageUrl: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  imageIcon: WebIconProperty({
                                                                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-time-clock" }
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
                                                                  iconSize: 16,
                                                                  displayAs: "fullImage",
                                                                  responsive: true,
                                                                  class: "mx-name-image24 unset-img-width spacing-inner-top-smallest",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.text72",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text72",
                                                                  class: "mx-name-text72 font-size-medium font-weight-semibold",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DurationP50" }, { "type": "literal", "value": '{"decimalPrecision":1}' }] }, { "type": "literal", "value": " s" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
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
                                                      ariaHidden: false
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceOverview.container76$visibility",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container76$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ConversationalUI.TraceFiltering_Agent" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.container76",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container76",
                                                      class: "mx-name-container76",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.container30",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container30",
                                                            class: "mx-name-container30 row-left-aligned spacing-outer-bottom-smallest",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.container48",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container48",
                                                                  class: "mx-name-container48 row-text-img",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Text,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.text23",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text23",
                                                                        class: "mx-name-text23 font-weight-semibold",
                                                                        style: void 0,
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Duration P95" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        renderMode: "span"
                                                                      }
                                                                    )
                                                                  ],
                                                                  ariaHidden: false
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Tooltip,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.tooltip5",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.tooltip5",
                                                                  trigger: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ConditionalVisibilityWrapper,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.actionButton28$visibility",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton28$visibility",
                                                                        visible: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                        }),
                                                                        contents: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $ActionButton,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceOverview.actionButton28",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton28",
                                                                              buttonId: "p.ConversationalUI.Snippet_TraceOverview.actionButton28",
                                                                              class: "mx-name-actionButton28 tooltip-info-icon btn-sm spacing-outer-bottom-none",
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
                                                                                  ""
                                                                                ])
                                                                              }),
                                                                              icon: WebIconProperty({
                                                                                "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$info_circle_grey.svg" }
                                                                              }),
                                                                              action: ActionProperty({
                                                                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                                                "abortOnServerValidation": true
                                                                              })
                                                                            }
                                                                          )
                                                                        ]
                                                                      }
                                                                    )
                                                                  ],
                                                                  renderMethod: "custom",
                                                                  htmlMessage: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.container31",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container31",
                                                                        class: "mx-name-container31 tooltip-container",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Container,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceOverview.container32",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container32",
                                                                              class: "mx-name-container32 tooltip-col",
                                                                              style: void 0,
                                                                              renderMode: "div",
                                                                              onClick: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceOverview.text6",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text6",
                                                                                    class: "mx-name-text6 text-normal",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "The\xA0P95 (95th Percentile) duration\xA0is the time by which\xA095% of the model or agent responses are completed. This helps you understand the worst-case scenario." }, "args": {} }
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
                                                                        ariaHidden: false
                                                                      }
                                                                    )
                                                                  ],
                                                                  textMessage: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  tooltipPosition: "bottom",
                                                                  arrowPosition: "end",
                                                                  openOn: "hover",
                                                                  class: "mx-name-tooltip5 convui-tooltip",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              )
                                                            ],
                                                            ariaHidden: false
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.container77",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container77",
                                                            class: "mx-name-container77 row-text-img",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.image25",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.image25",
                                                                  datasource: "icon",
                                                                  imageObject: void 0,
                                                                  defaultImageDynamic: void 0,
                                                                  imageUrl: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  imageIcon: WebIconProperty({
                                                                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-time-clock" }
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
                                                                  iconSize: 16,
                                                                  displayAs: "fullImage",
                                                                  responsive: true,
                                                                  class: "mx-name-image25 unset-img-width spacing-inner-top-smallest",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.text73",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text73",
                                                                  class: "mx-name-text73 font-size-medium font-weight-semibold",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DurationP95" }, { "type": "literal", "value": '{"decimalPrecision":1}' }] }, { "type": "literal", "value": " s" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
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
                                                      ariaHidden: false
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceOverview.container78",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container78",
                                                class: "mx-name-container78",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.container1",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container1",
                                                      class: "mx-name-container1 row-left-aligned spacing-outer-bottom-smallest",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.container3",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container3",
                                                            class: "mx-name-container3",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.text24",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text24",
                                                                  class: "mx-name-text24 font-weight-semibold",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "Total token consumption " }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  renderMode: "span"
                                                                }
                                                              )
                                                            ],
                                                            ariaHidden: false
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Tooltip,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.tooltip7",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.tooltip7",
                                                            trigger: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.actionButton30$visibility",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton30$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ActionButton,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.actionButton30",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton30",
                                                                        buttonId: "p.ConversationalUI.Snippet_TraceOverview.actionButton30",
                                                                        class: "mx-name-actionButton30 tooltip-info-icon btn-sm spacing-outer-bottom-none",
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
                                                                            ""
                                                                          ])
                                                                        }),
                                                                        icon: WebIconProperty({
                                                                          "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$info_circle_grey.svg" }
                                                                        }),
                                                                        action: ActionProperty({
                                                                          "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                                          "abortOnServerValidation": true
                                                                        })
                                                                      }
                                                                    )
                                                                  ]
                                                                }
                                                              )
                                                            ],
                                                            renderMethod: "custom",
                                                            htmlMessage: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.container41",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container41",
                                                                  class: "mx-name-container41 tooltip-container-token",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.container51",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container51",
                                                                        class: "mx-name-container51 tooltip-row-text-icon",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Image,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceOverview.image5",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.image5",
                                                                              datasource: "image",
                                                                              imageObject: WebStaticImageProperty({
                                                                                "image": { "uri": "img/ConversationalUI$Image_Traces$token.svg" }
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
                                                                              class: "mx-name-image5 img--14-20",
                                                                              style: void 0,
                                                                              tabIndex: void 0
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceOverview.text12",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text12",
                                                                              class: "mx-name-text12 font-weight-semibold",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Total tokens" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              renderMode: "span"
                                                                            }
                                                                          )
                                                                        ],
                                                                        ariaHidden: false
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.container52",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container52",
                                                                        class: "mx-name-container52 tooltip-col",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceOverview.text11",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text11",
                                                                              class: "mx-name-text11",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalToken" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
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
                                                                  ariaHidden: false
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.container53",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container53",
                                                                  class: "mx-name-container53 divider spacing-inner-none spacing-outer-left spacing-outer-right",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: void 0,
                                                                  ariaHidden: false
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.container54",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container54",
                                                                  class: "mx-name-container54 tooltip-container-token",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.container55",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container55",
                                                                        class: "mx-name-container55 tooltip-row-text-icon",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Image,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceOverview.image9",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.image9",
                                                                              datasource: "image",
                                                                              imageObject: WebStaticImageProperty({
                                                                                "image": { "uri": "img/ConversationalUI$Image_Traces$token_input.svg" }
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
                                                                              class: "mx-name-image9 img--14-20",
                                                                              style: void 0,
                                                                              tabIndex: void 0
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceOverview.text14",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text14",
                                                                              class: "mx-name-text14 font-weight-semibold",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Total input tokens" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              renderMode: "span"
                                                                            }
                                                                          )
                                                                        ],
                                                                        ariaHidden: false
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.container39",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container39",
                                                                        class: "mx-name-container39 tooltip-col",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceOverview.text15",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text15",
                                                                              class: "mx-name-text15",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalInputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
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
                                                                  ariaHidden: false
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.container40",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container40",
                                                                  class: "mx-name-container40 divider spacing-inner-none spacing-outer-left spacing-outer-right",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: void 0,
                                                                  ariaHidden: false
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.container42",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container42",
                                                                  class: "mx-name-container42 tooltip-container-token",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.container44",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container44",
                                                                        class: "mx-name-container44 tooltip-row-text-icon",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Image,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceOverview.image13",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.image13",
                                                                              datasource: "image",
                                                                              imageObject: WebStaticImageProperty({
                                                                                "image": { "uri": "img/ConversationalUI$Image_Traces$token_output.svg" }
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
                                                                              class: "mx-name-image13 img--14-20",
                                                                              style: void 0,
                                                                              tabIndex: void 0
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceOverview.text10",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text10",
                                                                              class: "mx-name-text10 font-weight-semibold",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Total output tokens" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              renderMode: "span"
                                                                            }
                                                                          )
                                                                        ],
                                                                        ariaHidden: false
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.container45",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container45",
                                                                        class: "mx-name-container45 tooltip-col",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceOverview.text16",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text16",
                                                                              class: "mx-name-text16",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalOutputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
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
                                                                  ariaHidden: false
                                                                }
                                                              )
                                                            ],
                                                            textMessage: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                              })
                                                            ]),
                                                            tooltipPosition: "bottom",
                                                            arrowPosition: "end",
                                                            openOn: "hover",
                                                            class: "mx-name-tooltip7 convui-tooltip",
                                                            style: void 0,
                                                            tabIndex: void 0
                                                          }
                                                        )
                                                      ],
                                                      ariaHidden: false
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.container79$visibility",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container79$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalToken" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.container79",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container79",
                                                            class: "mx-name-container79 row-text-img",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.image26",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.image26",
                                                                  datasource: "icon",
                                                                  imageObject: void 0,
                                                                  defaultImageDynamic: void 0,
                                                                  imageUrl: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  imageIcon: WebIconProperty({
                                                                    "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$token.svg" }
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
                                                                  class: "mx-name-image26 unset-img-width spacing-inner-top-smallest",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.text74",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text74",
                                                                  class: "mx-name-text74 font-size-medium font-weight-semibold",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalToken" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, { "type": "literal", "value": " (" }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalInputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }] }, { "type": "literal", "value": " / " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalOutputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }] }, { "type": "literal", "value": ")" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
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
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.text78$visibility",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text78$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalToken" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.text78",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text78",
                                                            class: "mx-name-text78 font-size-medium font-weight-semibold",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "-" }, "args": {} }
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
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceOverview.container80",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container80",
                                                class: "mx-name-container80",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.container49",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container49",
                                                      class: "mx-name-container49 spacing-outer-bottom-smaller",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.text25",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text25",
                                                            class: "mx-name-text25 font-weight-semibold",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Errors" }, "args": {} }
                                                              })
                                                            ]),
                                                            renderMode: "span"
                                                          }
                                                        )
                                                      ],
                                                      ariaHidden: false
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.container81$visibility",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container81$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ErrorCount" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.container81",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container81",
                                                            class: "mx-name-container81 row-text-img",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.image27",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.image27",
                                                                  datasource: "icon",
                                                                  imageObject: void 0,
                                                                  defaultImageDynamic: void 0,
                                                                  imageUrl: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  imageIcon: WebIconProperty({
                                                                    "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$alert_triangle.svg" }
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
                                                                  class: "mx-name-image27 unset-img-width",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.text76",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text76",
                                                                  class: "mx-name-text76 font-size-medium font-weight-semibold",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ErrorCount" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
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
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.text79$visibility",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text79$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ErrorCount" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.text79",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text79",
                                                            class: "mx-name-text79 font-size-medium font-weight-semibold",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "-" }, "args": {} }
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
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceOverview.container82",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container82",
                                                class: "mx-name-container82",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.container35",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container35",
                                                      class: "mx-name-container35 row-left-aligned spacing-outer-bottom-smallest",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.container50",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container50",
                                                            class: "mx-name-container50",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.text26",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text26",
                                                                  class: "mx-name-text26 font-weight-semibold",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "Error rate" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  renderMode: "span"
                                                                }
                                                              )
                                                            ],
                                                            ariaHidden: false
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Tooltip,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.tooltip6",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.tooltip6",
                                                            trigger: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.actionButton29$visibility",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton29$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ActionButton,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.actionButton29",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton29",
                                                                        buttonId: "p.ConversationalUI.Snippet_TraceOverview.actionButton29",
                                                                        class: "mx-name-actionButton29 tooltip-info-icon btn-sm spacing-outer-bottom-none",
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
                                                                            ""
                                                                          ])
                                                                        }),
                                                                        icon: WebIconProperty({
                                                                          "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$info_circle_grey.svg" }
                                                                        }),
                                                                        action: ActionProperty({
                                                                          "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                                          "abortOnServerValidation": true
                                                                        })
                                                                      }
                                                                    )
                                                                  ]
                                                                }
                                                              )
                                                            ],
                                                            renderMethod: "custom",
                                                            htmlMessage: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.container36",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container36",
                                                                  class: "mx-name-container36 tooltip-container",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.container38",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container38",
                                                                        class: "mx-name-container38 tooltip-col",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceOverview.text8",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text8",
                                                                              class: "mx-name-text8 text-normal",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "This refers to the percentage of errors by the model or agent during interactions." }, "args": {} }
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
                                                                  ariaHidden: false
                                                                }
                                                              )
                                                            ],
                                                            textMessage: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                              })
                                                            ]),
                                                            tooltipPosition: "bottom",
                                                            arrowPosition: "end",
                                                            openOn: "hover",
                                                            class: "mx-name-tooltip6 convui-tooltip",
                                                            style: void 0,
                                                            tabIndex: void 0
                                                          }
                                                        )
                                                      ],
                                                      ariaHidden: false
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.container83$visibility",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container83$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ErrorRate" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.container83",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container83",
                                                            class: "mx-name-container83 row-text-img",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.image28",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.image28",
                                                                  datasource: "icon",
                                                                  imageObject: void 0,
                                                                  defaultImageDynamic: void 0,
                                                                  imageUrl: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  imageIcon: WebIconProperty({
                                                                    "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$duration.svg" }
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
                                                                  class: "mx-name-image28 unset-img-width spacing-inner-top-smallest",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.text77",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text77",
                                                                  class: "mx-name-text77 font-size-medium font-weight-semibold",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ErrorRate" }, { "type": "literal", "value": '{"decimalPrecision":2}' }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
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
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.text81$visibility",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text81$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ErrorRate" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.text81",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text81",
                                                            class: "mx-name-text81 font-size-medium font-weight-semibold",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "-" }, "args": {} }
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
                                          ],
                                          ariaHidden: false
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Snippet_TraceOverview.container6",
                                    $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container6",
                                    class: "mx-name-container6 card-content-scroll",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Snippet_TraceOverview.container14",
                                          $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container14",
                                          class: "mx-name-container14 spacing-inner-bottom-medium",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceOverview.columnChart1$visibility",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceOverview.columnChart1$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ChartType" }, { "type": "literal", "value": "Total_Tokens" }] }, "then": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalToken" }, { "type": "literal", "value": null }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ColumnChart,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.columnChart1",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.columnChart1",
                                                      series: [
                                                        {
                                                          "dataSet": "static",
                                                          "staticDataSource": AssociationObjectListProperty({
                                                            "dataSourceId": "p.31",
                                                            "entity": "ConversationalUI.TraceChartView",
                                                            "scope": "p.ConversationalUI.Snippet_TraceOverview.dataView1",
                                                            "operationId": "zxgvnDfZHla+tV7WpbMQXQ"
                                                          }),
                                                          "staticName": selectTranslation([
                                                            ExpressionProperty({
                                                              "expression": { "expr": { "type": "literal", "value": "Input tokens" }, "args": {} }
                                                            })
                                                          ]),
                                                          "staticXAttribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "ConversationalUI.TraceChartView",
                                                            "attribute": "TimeFrameBeginning",
                                                            "attributeType": "DateTime",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.31",
                                                            "isList": false
                                                          }),
                                                          "staticYAttribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "ConversationalUI.TraceChartView",
                                                            "attribute": "InputTokens",
                                                            "attributeType": "Integer",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.31",
                                                            "isList": false
                                                          }),
                                                          "aggregationType": "none",
                                                          "staticTooltipHoverText": selectTranslation([
                                                            ListExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Input tokens: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "InputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }] }, { "type": "literal", "value": " / Timeframe: " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeFrameBeginning" }, { "type": "literal", "value": '{"type":"datetime"}' }] }] }, { "type": "literal", "value": " - " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeFrameEnd" }, { "type": "literal", "value": '{"type":"datetime"}' }] }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.columnChart1", "source": "object" } } },
                                                              "dataSourceId": "p.31"
                                                            })
                                                          ]),
                                                          "staticBarColor": ListExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "#47A9FF" }, "args": {} },
                                                            "dataSourceId": "p.31"
                                                          }),
                                                          "staticOnClickAction": void 0,
                                                          "customSeriesOptions": ""
                                                        },
                                                        {
                                                          "dataSet": "static",
                                                          "staticDataSource": AssociationObjectListProperty({
                                                            "dataSourceId": "p.32",
                                                            "entity": "ConversationalUI.TraceChartView",
                                                            "scope": "p.ConversationalUI.Snippet_TraceOverview.dataView1",
                                                            "operationId": "RjUQOGWMgF2t77Bbzzf4bQ"
                                                          }),
                                                          "staticName": selectTranslation([
                                                            ExpressionProperty({
                                                              "expression": { "expr": { "type": "literal", "value": "Output tokens" }, "args": {} }
                                                            })
                                                          ]),
                                                          "staticXAttribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "ConversationalUI.TraceChartView",
                                                            "attribute": "TimeFrameBeginning",
                                                            "attributeType": "DateTime",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.32",
                                                            "isList": false
                                                          }),
                                                          "staticYAttribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "ConversationalUI.TraceChartView",
                                                            "attribute": "OutputTokens",
                                                            "attributeType": "Integer",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.32",
                                                            "isList": false
                                                          }),
                                                          "aggregationType": "none",
                                                          "staticTooltipHoverText": selectTranslation([
                                                            ListExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Ouput tokens: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "OutputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }] }, { "type": "literal", "value": " / Timeframe: " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeFrameBeginning" }, { "type": "literal", "value": '{"type":"datetime"}' }] }] }, { "type": "literal", "value": " - " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeFrameEnd" }, { "type": "literal", "value": '{"type":"datetime"}' }] }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.columnChart1", "source": "object" } } },
                                                              "dataSourceId": "p.32"
                                                            })
                                                          ]),
                                                          "staticBarColor": ListExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "#845EFF" }, "args": {} },
                                                            "dataSourceId": "p.32"
                                                          }),
                                                          "staticOnClickAction": void 0,
                                                          "customSeriesOptions": ""
                                                        }
                                                      ],
                                                      advancedOptions: false,
                                                      showPlaygroundSlot: false,
                                                      playground: void 0,
                                                      xAxisLabel: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Date" }, "args": {} }
                                                        })
                                                      ]),
                                                      yAxisLabel: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Tokens" }, "args": {} }
                                                        })
                                                      ]),
                                                      showLegend: true,
                                                      gridLines: "horizontal",
                                                      barmode: "group",
                                                      widthUnit: "percentage",
                                                      width: 100,
                                                      heightUnit: "percentageOfWidth",
                                                      height: 20,
                                                      enableThemeConfig: false,
                                                      customLayout: '{ "hovermode": "x",\r\n  "hoverdistance":  -1,\r\n  "spikedistance": -1,\r\n  "automargin": true,\r\n  "legend": {\r\n    "itemclick": false,\r\n    "x": 1,\r\n    "xanchor": "right",\r\n    "y": 1.1,\r\n    "font": {\r\n    "family": "Arial, sans-serif",\r\n    "size": 12\r\n    }\r\n  },\r\n  "xaxis": {\r\n    "showspikes": true,\r\n    "spikemode": "across",\r\n    "spikesnap": "data",\r\n    "spikethickness": 1,\r\n    "spikecolor": "#6c717e",\r\n    "spikedash": "solid",\r\n    "title": {\r\n      "text": "<b>Date (local timezone)</b>",\r\n      "standoff":  16,\r\n      "font": {\r\n        "family": "Arial, sans-serif",\r\n        "size": 12\r\n      }\r\n    },\r\n    "color": "#6c717e",\r\n    "showgrid": false,\r\n    "fixedrange": true,\r\n    "showline": true,\r\n    "linewidth": 1,\r\n    "type": "date",\r\n    "ticks": "outside",\r\n    "ticklen": 5,\r\n    "tickwidth": 1,\r\n    "tickcolor": "#6c717e",\r\n     "tickfont": {\r\n      "family": "Arial, sans-serif",\r\n      "size": 12,\r\n      "color": "#6c717e"\r\n    }\r\n  },\r\n  "yaxis": {\r\n    "rangemode": "tozero",\r\n    "gridcolor": "#eaeaea",\r\n    "title": {\r\n      "text": "<b>Tokens</b>",\r\n      "standoff":  16,\r\n      "font": {\r\n        "family": "Arial, sans-serif",\r\n        "size": 12\r\n      }\r\n    },\r\n     "tickfont": {\r\n      "family": "Arial, sans-serif",\r\n      "size": 12,\r\n      "color": "#6c717e"\r\n    },\r\n    "color": "#6c717e",\r\n    "showgrid": true,\r\n    "showline": false,\r\n    "fixedrange": true,\r\n    "exponentformat": "SI",\r\n    "minexponent": 2\r\n  }\r\n}',
                                                      customConfigurations: "",
                                                      class: "mx-name-columnChart1",
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
                                                key: "p.ConversationalUI.Snippet_TraceOverview.columnChart2$visibility",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceOverview.columnChart2$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ChartType" }, { "type": "literal", "value": "Number_of_Invocations" }] }, "then": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalInvocations" }, { "type": "literal", "value": null }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ColumnChart,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.columnChart2",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.columnChart2",
                                                      series: [
                                                        {
                                                          "dataSet": "static",
                                                          "staticDataSource": AssociationObjectListProperty({
                                                            "dataSourceId": "p.33",
                                                            "entity": "ConversationalUI.TraceChartView",
                                                            "scope": "p.ConversationalUI.Snippet_TraceOverview.dataView1",
                                                            "operationId": "HclM3JYYxVKJGzeU8+xFww"
                                                          }),
                                                          "staticName": selectTranslation([
                                                            ExpressionProperty({
                                                              "expression": { "expr": { "type": "literal", "value": "Total invocations" }, "args": {} }
                                                            })
                                                          ]),
                                                          "staticXAttribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "ConversationalUI.TraceChartView",
                                                            "attribute": "TimeFrameBeginning",
                                                            "attributeType": "DateTime",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.33",
                                                            "isList": false
                                                          }),
                                                          "staticYAttribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "ConversationalUI.TraceChartView",
                                                            "attribute": "TotalInvocations",
                                                            "attributeType": "Integer",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.33",
                                                            "isList": false
                                                          }),
                                                          "aggregationType": "none",
                                                          "staticTooltipHoverText": selectTranslation([
                                                            ListExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Total invocations: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalInvocations" }, { "type": "literal", "value": '{"groupDigits":true}' }] }] }, { "type": "literal", "value": " / Timeframe: " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeFrameBeginning" }, { "type": "literal", "value": '{"type":"datetime"}' }] }] }, { "type": "literal", "value": " - " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeFrameEnd" }, { "type": "literal", "value": '{"type":"datetime"}' }] }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.columnChart2", "source": "object" } } },
                                                              "dataSourceId": "p.33"
                                                            })
                                                          ]),
                                                          "staticBarColor": ListExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "#47A9FF" }, "args": {} },
                                                            "dataSourceId": "p.33"
                                                          }),
                                                          "staticOnClickAction": void 0,
                                                          "customSeriesOptions": ""
                                                        }
                                                      ],
                                                      advancedOptions: false,
                                                      showPlaygroundSlot: false,
                                                      playground: void 0,
                                                      xAxisLabel: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Date" }, "args": {} }
                                                        })
                                                      ]),
                                                      yAxisLabel: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Total invocations" }, "args": {} }
                                                        })
                                                      ]),
                                                      showLegend: false,
                                                      gridLines: "horizontal",
                                                      barmode: "group",
                                                      widthUnit: "percentage",
                                                      width: 100,
                                                      heightUnit: "percentageOfWidth",
                                                      height: 20,
                                                      enableThemeConfig: false,
                                                      customLayout: '{ "hovermode": "x",\r\n  "hoverdistance":  -1,\r\n  "spikedistance": -1,\r\n  "automargin": true,\r\n  "legend": {\r\n    "itemclick": false,\r\n    "x": 1,\r\n    "xanchor": "right",\r\n    "y": 1.1,\r\n    "font": {\r\n    "family": "Arial, sans-serif",\r\n    "size": 12\r\n    }\r\n  },\r\n  "xaxis": {\r\n    "showspikes": true,\r\n    "spikemode": "across",\r\n    "spikesnap": "data",\r\n    "spikethickness": 1,\r\n    "spikecolor": "#6c717e",\r\n    "spikedash": "solid",\r\n    "title": {\r\n      "text": "<b>Date (local timezone)</b>",\r\n      "standoff":  16,\r\n      "font": {\r\n        "family": "Arial, sans-serif",\r\n        "size": 12\r\n      }\r\n    },\r\n    "color": "#6c717e",\r\n    "showgrid": false,\r\n    "fixedrange": true,\r\n    "showline": true,\r\n    "linewidth": 1,\r\n    "type": "date",\r\n    "ticks": "outside",\r\n    "ticklen": 5,\r\n    "tickwidth": 1,\r\n    "tickcolor": "#6c717e",\r\n     "tickfont": {\r\n      "family": "Arial, sans-serif",\r\n      "size": 12,\r\n      "color": "#6c717e"\r\n    }\r\n  },\r\n  "yaxis": {\r\n    "rangemode": "tozero",\r\n    "gridcolor": "#eaeaea",\r\n    "title": {\r\n      "text": "<b>Total invocations</b>",\r\n      "standoff":  16,\r\n      "font": {\r\n        "family": "Arial, sans-serif",\r\n        "size": 12\r\n      }\r\n    },\r\n     "tickfont": {\r\n      "family": "Arial, sans-serif",\r\n      "size": 12,\r\n      "color": "#6c717e"\r\n    },\r\n    "color": "#6c717e",\r\n    "showgrid": true,\r\n    "showline": false,\r\n    "fixedrange": true,\r\n    "exponentformat": "SI",\r\n    "minexponent": 2\r\n  }\r\n}',
                                                      customConfigurations: "",
                                                      class: "mx-name-columnChart2",
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
                                                key: "p.ConversationalUI.Snippet_TraceOverview.columnChart3$visibility",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceOverview.columnChart3$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ChartType" }, { "type": "literal", "value": "Total_Conversations" }] }, "then": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalConversations" }, { "type": "literal", "value": null }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ColumnChart,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.columnChart3",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.columnChart3",
                                                      series: [
                                                        {
                                                          "dataSet": "static",
                                                          "staticDataSource": AssociationObjectListProperty({
                                                            "dataSourceId": "p.34",
                                                            "entity": "ConversationalUI.TraceChartView",
                                                            "scope": "p.ConversationalUI.Snippet_TraceOverview.dataView1",
                                                            "operationId": "z5aCnj5CMVa8nRzjGPE5wA"
                                                          }),
                                                          "staticName": selectTranslation([
                                                            ExpressionProperty({
                                                              "expression": { "expr": { "type": "literal", "value": "Total conversations" }, "args": {} }
                                                            })
                                                          ]),
                                                          "staticXAttribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "ConversationalUI.TraceChartView",
                                                            "attribute": "TimeFrameBeginning",
                                                            "attributeType": "DateTime",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.34",
                                                            "isList": false
                                                          }),
                                                          "staticYAttribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "ConversationalUI.TraceChartView",
                                                            "attribute": "TotalConversations",
                                                            "attributeType": "Integer",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.34",
                                                            "isList": false
                                                          }),
                                                          "aggregationType": "none",
                                                          "staticTooltipHoverText": selectTranslation([
                                                            ListExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Total conversations: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalConversations" }, { "type": "literal", "value": '{"groupDigits":true}' }] }] }, { "type": "literal", "value": " / Timeframe: " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeFrameBeginning" }, { "type": "literal", "value": '{"type":"datetime"}' }] }] }, { "type": "literal", "value": " - " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TimeFrameEnd" }, { "type": "literal", "value": '{"type":"datetime"}' }] }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.columnChart3", "source": "object" } } },
                                                              "dataSourceId": "p.34"
                                                            })
                                                          ]),
                                                          "staticBarColor": ListExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "#47A9FF" }, "args": {} },
                                                            "dataSourceId": "p.34"
                                                          }),
                                                          "staticOnClickAction": void 0,
                                                          "customSeriesOptions": ""
                                                        }
                                                      ],
                                                      advancedOptions: false,
                                                      showPlaygroundSlot: false,
                                                      playground: void 0,
                                                      xAxisLabel: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Date" }, "args": {} }
                                                        })
                                                      ]),
                                                      yAxisLabel: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Total conversations" }, "args": {} }
                                                        })
                                                      ]),
                                                      showLegend: false,
                                                      gridLines: "horizontal",
                                                      barmode: "group",
                                                      widthUnit: "percentage",
                                                      width: 100,
                                                      heightUnit: "percentageOfWidth",
                                                      height: 20,
                                                      enableThemeConfig: false,
                                                      customLayout: '{ "hovermode": "x",\r\n  "hoverdistance":  -1,\r\n  "spikedistance": -1,\r\n  "automargin": true,\r\n  "legend": {\r\n    "itemclick": false,\r\n    "x": 1,\r\n    "xanchor": "right",\r\n    "y": 1.1,\r\n    "font": {\r\n    "family": "Arial, sans-serif",\r\n    "size": 12\r\n    }\r\n  },\r\n  "xaxis": {\r\n    "showspikes": true,\r\n    "spikemode": "across",\r\n    "spikesnap": "data",\r\n    "spikethickness": 1,\r\n    "spikecolor": "#6c717e",\r\n    "spikedash": "solid",\r\n    "title": {\r\n      "text": "<b>Date (local timezone)</b>",\r\n      "standoff":  16,\r\n      "font": {\r\n        "family": "Arial, sans-serif",\r\n        "size": 12\r\n      }\r\n    },\r\n    "color": "#6c717e",\r\n    "showgrid": false,\r\n    "fixedrange": true,\r\n    "showline": true,\r\n    "linewidth": 1,\r\n    "type": "date",\r\n    "ticks": "outside",\r\n    "ticklen": 5,\r\n    "tickwidth": 1,\r\n    "tickcolor": "#6c717e",\r\n     "tickfont": {\r\n      "family": "Arial, sans-serif",\r\n      "size": 12,\r\n      "color": "#6c717e"\r\n    }\r\n  },\r\n  "yaxis": {\r\n    "rangemode": "tozero",\r\n    "gridcolor": "#eaeaea",\r\n    "title": {\r\n      "text": "<b>Total conversations</b>",\r\n      "standoff":  16,\r\n      "font": {\r\n        "family": "Arial, sans-serif",\r\n        "size": 12\r\n      }\r\n    },\r\n     "tickfont": {\r\n      "family": "Arial, sans-serif",\r\n      "size": 12,\r\n      "color": "#6c717e"\r\n    },\r\n    "color": "#6c717e",\r\n    "showgrid": true,\r\n    "showline": false,\r\n    "fixedrange": true,\r\n    "exponentformat": "SI",\r\n    "minexponent": 2\r\n  }\r\n}',
                                                      customConfigurations: "",
                                                      class: "mx-name-columnChart3",
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
                                        $Datagrid,
                                        {
                                          key: "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1",
                                          $widgetId: "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1",
                                          datasource: MicroflowObjectListProperty({
                                            "argMap": { "TraceFiltering": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } },
                                            "dataSourceId": "p.35",
                                            "entity": "GenAICommons.Trace",
                                            "scope": "p.ConversationalUI.Snippet_TraceOverview.dataView1",
                                            "operationId": "H0wbKDtt/FeR05hMUKwr+g"
                                          }),
                                          refreshInterval: 0,
                                          itemSelectionMethod: "checkbox",
                                          itemSelectionMode: "clear",
                                          showSelectAllToggle: true,
                                          keepSelection: false,
                                          loadingType: "spinner",
                                          refreshIndicator: false,
                                          columns: [
                                            {
                                              "showContentAs": "customContent",
                                              "content": TemplatedWidgetProperty({
                                                "dataSourceId": "p.35",
                                                "editable": false,
                                                "children": () => [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Fragment,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.snippetCall5",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.snippetCall5",
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $DataView,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceAgent.dataView1",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceAgent.dataView1",
                                                            class: "mx-name-dataView1 form-horizontal",
                                                            style: void 0,
                                                            tabIndex: void 0,
                                                            object: MicroflowObjectProperty({
                                                              "dataSourceId": "p.311",
                                                              "scope": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1",
                                                              "editable": true,
                                                              "operationId": "xWlTqrQnV16hiticdk/RSw",
                                                              "argMap": { "Trace": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1", "source": "object" } }
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
                                                                  key: "p.ConversationalUI.Snippet_TraceAgent.text2$visibility",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceAgent.text2$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "Trace", "path": "_AgentVersionId" }] }, { "type": "literal", "value": "" }] }, "args": { "Trace": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Text,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceAgent.text2",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceAgent.text2",
                                                                        class: "mx-name-text2 text-break",
                                                                        style: void 0,
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "LLM Call" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        renderMode: "span"
                                                                      }
                                                                    )
                                                                  ]
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceAgent.text1$visibility",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceAgent.text1$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "Trace", "path": "_AgentVersionId" }] }, { "type": "literal", "value": "" }] }, "args": { "Trace": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Text,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceAgent.text1",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceAgent.text1",
                                                                        class: "mx-name-text1 text-break",
                                                                        style: void 0,
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AgentCommons.Version_Agent/AgentCommons.Agent/Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceAgent.dataView1", "source": "object" } } }
                                                                          })
                                                                        ]),
                                                                        renderMode: "span"
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
                                              }),
                                              "dynamicText": selectTranslation([
                                                void 0
                                              ]),
                                              "exportValue": selectTranslation([
                                                void 0
                                              ]),
                                              "header": selectTranslation([
                                                ExpressionProperty({
                                                  "expression": { "expr": { "type": "literal", "value": "Agent" }, "args": {} }
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
                                            },
                                            {
                                              "showContentAs": "customContent",
                                              "content": TemplatedWidgetProperty({
                                                "dataSourceId": "p.35",
                                                "editable": false,
                                                "children": () => [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.text7$visibility",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text7$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.text7",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text7",
                                                            class: "mx-name-text7",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "-" }, "args": {} }
                                                              })
                                                            ]),
                                                            renderMode: "span"
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $DataView,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.dataView5",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.dataView5",
                                                      class: "mx-name-dataView5 form-horizontal",
                                                      style: void 0,
                                                      tabIndex: void 0,
                                                      object: MicroflowObjectProperty({
                                                        "dataSourceId": "p.323",
                                                        "scope": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1",
                                                        "editable": true,
                                                        "operationId": "ZJRCGNrNaV6+D5heUIcK4g",
                                                        "argMap": { "Trace": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1", "source": "object" } }
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
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.container33$visibility",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container33$visibility",
                                                            visible: ExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView5", "source": "object" } } }
                                                            }),
                                                            contents: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.container33",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container33",
                                                                  class: "mx-name-container33 row-left-aligned",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ConditionalVisibilityWrapper,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.text1$visibility",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text1$visibility",
                                                                        visible: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsDraftVersion" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView5", "source": "object" } } }
                                                                        }),
                                                                        contents: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceOverview.text1",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text1",
                                                                              class: "mx-name-text1",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Draft" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              renderMode: "span"
                                                                            }
                                                                          )
                                                                        ]
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ConditionalVisibilityWrapper,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.text9$visibility",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text9$visibility",
                                                                        visible: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "IsDraftVersion" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView5", "source": "object" } } }
                                                                        }),
                                                                        contents: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceOverview.text9",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text9",
                                                                              class: "mx-name-text9",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "v" }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "VersionNumber" }, { "type": "literal", "value": "{}" }] }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView5", "source": "object" } } }
                                                                                })
                                                                              ]),
                                                                              renderMode: "span"
                                                                            }
                                                                          )
                                                                        ]
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Fragment,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.snippetCall4",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.snippetCall4",
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Container,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container3",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container3",
                                                                              class: "mx-name-container3 row-left-aligned",
                                                                              style: void 0,
                                                                              renderMode: "div",
                                                                              onClick: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $DataView,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView1",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView1",
                                                                                    class: "mx-name-dataView1 form-vertical",
                                                                                    style: void 0,
                                                                                    tabIndex: void 0,
                                                                                    object: MicroflowObjectProperty({
                                                                                      "dataSourceId": "p.339",
                                                                                      "scope": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1",
                                                                                      "editable": true,
                                                                                      "operationId": "8ufL+j42bVuiQJVzcnKOZw",
                                                                                      "argMap": { "Trace": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1", "source": "object" } }
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
                                                                                          key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.tooltip3",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.tooltip3",
                                                                                          trigger: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $ConditionalVisibilityWrapper,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.actionButton22$visibility",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.actionButton22$visibility",
                                                                                                visible: ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                                                }),
                                                                                                contents: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $ActionButton,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.actionButton22",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.actionButton22",
                                                                                                      buttonId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.actionButton22",
                                                                                                      class: "mx-name-actionButton22 tooltip-info-icon btn-sm spacing-outer-bottom-none",
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
                                                                                                          ""
                                                                                                        ])
                                                                                                      }),
                                                                                                      icon: WebIconProperty({
                                                                                                        "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$info_circle_grey.svg" }
                                                                                                      }),
                                                                                                      action: ActionProperty({
                                                                                                        "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                                                                        "abortOnServerValidation": true
                                                                                                      })
                                                                                                    }
                                                                                                  )
                                                                                                ]
                                                                                              }
                                                                                            )
                                                                                          ],
                                                                                          renderMethod: "custom",
                                                                                          htmlMessage: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Container,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container103",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container103",
                                                                                                class: "mx-name-container103 tooltip-container-version",
                                                                                                style: void 0,
                                                                                                renderMode: "div",
                                                                                                onClick: void 0,
                                                                                                content: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container67",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container67",
                                                                                                      class: "mx-name-container67 tooltip-col",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text69",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text69",
                                                                                                            class: "mx-name-text69 font-weight-semibold",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Agent version" }, "args": {} }
                                                                                                              })
                                                                                                            ]),
                                                                                                            renderMode: "span"
                                                                                                          }
                                                                                                        )
                                                                                                      ],
                                                                                                      ariaHidden: false
                                                                                                    }
                                                                                                  ),
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $ConditionalVisibilityWrapper,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container24$visibility",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container24$visibility",
                                                                                                      visible: ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "Version", "path": "IsDraftVersion" }] }, "args": { "Version": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView5", "source": "object" } } }
                                                                                                      }),
                                                                                                      contents: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Container,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container24",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container24",
                                                                                                            class: "mx-name-container24 tooltip-col",
                                                                                                            style: void 0,
                                                                                                            renderMode: "div",
                                                                                                            onClick: void 0,
                                                                                                            content: [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $Text,
                                                                                                                {
                                                                                                                  key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text3",
                                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text3",
                                                                                                                  class: "mx-name-text3",
                                                                                                                  style: void 0,
                                                                                                                  caption: selectTranslation([
                                                                                                                    ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "v" }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Version", "path": "VersionNumber" }, { "type": "literal", "value": "{}" }] }] }, "args": { "Version": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView5", "source": "object" } } }
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
                                                                                                    $ConditionalVisibilityWrapper,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container41$visibility",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container41$visibility",
                                                                                                      visible: ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "variable", "variable": "Version", "path": "IsDraftVersion" }, "args": { "Version": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView5", "source": "object" } } }
                                                                                                      }),
                                                                                                      contents: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Container,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container41",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container41",
                                                                                                            class: "mx-name-container41 tooltip-col",
                                                                                                            style: void 0,
                                                                                                            renderMode: "div",
                                                                                                            onClick: void 0,
                                                                                                            content: [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $Container,
                                                                                                                {
                                                                                                                  key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container4",
                                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container4",
                                                                                                                  class: "mx-name-container4 tooltip-version-draft",
                                                                                                                  style: void 0,
                                                                                                                  renderMode: "div",
                                                                                                                  onClick: void 0,
                                                                                                                  content: [
                                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                                      $Image,
                                                                                                                      {
                                                                                                                        key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image14",
                                                                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image14",
                                                                                                                        datasource: "image",
                                                                                                                        imageObject: WebStaticImageProperty({
                                                                                                                          "image": { "uri": "img/ConversationalUI$Image_Traces$warning_triangle.svg" }
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
                                                                                                                        class: "mx-name-image14 img--14-14",
                                                                                                                        style: void 0,
                                                                                                                        tabIndex: void 0
                                                                                                                      }
                                                                                                                    ),
                                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                                      $Container,
                                                                                                                      {
                                                                                                                        key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container7",
                                                                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container7",
                                                                                                                        class: "mx-name-container7 spacing-outer-left-small",
                                                                                                                        style: void 0,
                                                                                                                        renderMode: "div",
                                                                                                                        onClick: void 0,
                                                                                                                        content: [
                                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                                            $Text,
                                                                                                                            {
                                                                                                                              key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text13",
                                                                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text13",
                                                                                                                              class: "mx-name-text13 font-weight-semibold",
                                                                                                                              style: void 0,
                                                                                                                              caption: selectTranslation([
                                                                                                                                ExpressionProperty({
                                                                                                                                  "expression": { "expr": { "type": "literal", "value": "Draft, " }, "args": {} }
                                                                                                                                })
                                                                                                                              ]),
                                                                                                                              renderMode: "span"
                                                                                                                            }
                                                                                                                          ),
                                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                                            $Text,
                                                                                                                            {
                                                                                                                              key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text12",
                                                                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text12",
                                                                                                                              class: "mx-name-text12",
                                                                                                                              style: void 0,
                                                                                                                              caption: selectTranslation([
                                                                                                                                ExpressionProperty({
                                                                                                                                  "expression": { "expr": { "type": "literal", "value": "your draft might have been changed after this execution" }, "args": {} }
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
                                                                                                                  ariaHidden: false
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
                                                                                                    $ConditionalVisibilityWrapper,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container68$visibility",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container68$visibility",
                                                                                                      visible: ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "Version", "path": "Description" }] }, { "type": "literal", "value": "" }] }, "args": { "Version": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView5", "source": "object" } } }
                                                                                                      }),
                                                                                                      contents: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Container,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container68",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container68",
                                                                                                            class: "mx-name-container68 tooltip-col",
                                                                                                            style: void 0,
                                                                                                            renderMode: "div",
                                                                                                            onClick: void 0,
                                                                                                            content: [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $Text,
                                                                                                                {
                                                                                                                  key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text70",
                                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text70",
                                                                                                                  class: "mx-name-text70 font-weight-semibold",
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
                                                                                                    $ConditionalVisibilityWrapper,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container25$visibility",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container25$visibility",
                                                                                                      visible: ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "Version", "path": "Description" }] }, { "type": "literal", "value": "" }] }, "args": { "Version": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView5", "source": "object" } } }
                                                                                                      }),
                                                                                                      contents: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Container,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container25",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container25",
                                                                                                            class: "mx-name-container25 tooltip-col",
                                                                                                            style: void 0,
                                                                                                            renderMode: "div",
                                                                                                            onClick: void 0,
                                                                                                            content: [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $Text,
                                                                                                                {
                                                                                                                  key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text71",
                                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text71",
                                                                                                                  class: "mx-name-text71 text-clamp--5-lines",
                                                                                                                  style: void 0,
                                                                                                                  caption: selectTranslation([
                                                                                                                    ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "variable", "variable": "Version", "path": "Description" }, "args": { "Version": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView5", "source": "object" } } }
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
                                                                                                    $ConditionalVisibilityWrapper,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container69$visibility",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container69$visibility",
                                                                                                      visible: ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "Version", "path": "SystemPrompt" }, { "type": "literal", "value": null }] }, "args": { "Version": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView5", "source": "object" } } }
                                                                                                      }),
                                                                                                      contents: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Container,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container69",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container69",
                                                                                                            class: "mx-name-container69 tooltip-col",
                                                                                                            style: void 0,
                                                                                                            renderMode: "div",
                                                                                                            onClick: void 0,
                                                                                                            content: [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $Text,
                                                                                                                {
                                                                                                                  key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text72",
                                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text72",
                                                                                                                  class: "mx-name-text72 font-weight-semibold",
                                                                                                                  style: void 0,
                                                                                                                  caption: selectTranslation([
                                                                                                                    ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "literal", "value": "System prompt" }, "args": {} }
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
                                                                                                    $ConditionalVisibilityWrapper,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container26$visibility",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container26$visibility",
                                                                                                      visible: ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "Version", "path": "SystemPrompt" }, { "type": "literal", "value": null }] }, "args": { "Version": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView5", "source": "object" } } }
                                                                                                      }),
                                                                                                      contents: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Container,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container26",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container26",
                                                                                                            class: "mx-name-container26 tooltip-col",
                                                                                                            style: void 0,
                                                                                                            renderMode: "div",
                                                                                                            onClick: void 0,
                                                                                                            content: [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $Text,
                                                                                                                {
                                                                                                                  key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text73",
                                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text73",
                                                                                                                  class: "mx-name-text73 text-clamp--5-lines",
                                                                                                                  style: void 0,
                                                                                                                  caption: selectTranslation([
                                                                                                                    ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "variable", "variable": "Version", "path": "SystemPrompt" }, "args": { "Version": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView5", "source": "object" } } }
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
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container70",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container70",
                                                                                                      class: "mx-name-container70 tooltip-col",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text74",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text74",
                                                                                                            class: "mx-name-text74 font-weight-semibold",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "User prompt" }, "args": {} }
                                                                                                              })
                                                                                                            ]),
                                                                                                            renderMode: "span"
                                                                                                          }
                                                                                                        )
                                                                                                      ],
                                                                                                      ariaHidden: false
                                                                                                    }
                                                                                                  ),
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container27",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container27",
                                                                                                      class: "mx-name-container27 tooltip-col",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text75",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text75",
                                                                                                            class: "mx-name-text75",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "variable", "variable": "Trace", "path": "Input" }, "args": { "Trace": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1", "source": "object" } } }
                                                                                                              })
                                                                                                            ]),
                                                                                                            renderMode: "span"
                                                                                                          }
                                                                                                        )
                                                                                                      ],
                                                                                                      ariaHidden: false
                                                                                                    }
                                                                                                  ),
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container71",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container71",
                                                                                                      class: "mx-name-container71 tooltip-col",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text76",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text76",
                                                                                                            class: "mx-name-text76 font-weight-semibold",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Model\r\n" }, "args": {} }
                                                                                                              })
                                                                                                            ]),
                                                                                                            renderMode: "span"
                                                                                                          }
                                                                                                        )
                                                                                                      ],
                                                                                                      ariaHidden: false
                                                                                                    }
                                                                                                  ),
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container2",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container2",
                                                                                                      class: "mx-name-container2 tooltip-col",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $DataView,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3",
                                                                                                            class: "mx-name-dataView3 form-horizontal",
                                                                                                            style: void 0,
                                                                                                            tabIndex: void 0,
                                                                                                            object: AssociationObjectProperty({
                                                                                                              "dataSourceId": "p.403",
                                                                                                              "scope": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1",
                                                                                                              "editable": true,
                                                                                                              "path": "GenAICommons.Trace_Usage/GenAICommons.Usage",
                                                                                                              "operationId": "CowcYBj2N125Jl2wUMVcRA"
                                                                                                            }),
                                                                                                            emptyMessage: TextProperty({
                                                                                                              "value": selectTranslation([
                                                                                                                ""
                                                                                                              ])
                                                                                                            }),
                                                                                                            body: [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $Container,
                                                                                                                {
                                                                                                                  key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container31",
                                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container31",
                                                                                                                  class: "mx-name-container31 tooltip-icon-text",
                                                                                                                  style: void 0,
                                                                                                                  renderMode: "div",
                                                                                                                  onClick: void 0,
                                                                                                                  content: [
                                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                                      $Container,
                                                                                                                      {
                                                                                                                        key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container6",
                                                                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container6",
                                                                                                                        class: "mx-name-container6",
                                                                                                                        style: void 0,
                                                                                                                        renderMode: "div",
                                                                                                                        onClick: void 0,
                                                                                                                        content: [
                                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                                            $ConditionalVisibilityWrapper,
                                                                                                                            {
                                                                                                                              key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image6$visibility",
                                                                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image6$visibility",
                                                                                                                              visible: ExpressionProperty({
                                                                                                                                "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "OpenAI" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3", "source": "object" } } }
                                                                                                                              }),
                                                                                                                              contents: [
                                                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                                                  $Image,
                                                                                                                                  {
                                                                                                                                    key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image6",
                                                                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image6",
                                                                                                                                    datasource: "image",
                                                                                                                                    imageObject: WebStaticImageProperty({
                                                                                                                                      "image": { "uri": "img/ConversationalUI$Image_Traces$openai.svg" }
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
                                                                                                                                    class: "mx-name-image6 unset-img-width",
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
                                                                                                                              key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image12$visibility",
                                                                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image12$visibility",
                                                                                                                              visible: ExpressionProperty({
                                                                                                                                "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Bedrock" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3", "source": "object" } } }
                                                                                                                              }),
                                                                                                                              contents: [
                                                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                                                  $Image,
                                                                                                                                  {
                                                                                                                                    key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image12",
                                                                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image12",
                                                                                                                                    datasource: "image",
                                                                                                                                    imageObject: WebStaticImageProperty({
                                                                                                                                      "image": { "uri": "img/ConversationalUI$Image_Traces$bedrock.svg" }
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
                                                                                                                                    class: "mx-name-image12 unset-img-width",
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
                                                                                                                              key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image13$visibility",
                                                                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image13$visibility",
                                                                                                                              visible: ExpressionProperty({
                                                                                                                                "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Azure" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3", "source": "object" } } }
                                                                                                                              }),
                                                                                                                              contents: [
                                                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                                                  $Image,
                                                                                                                                  {
                                                                                                                                    key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image13",
                                                                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image13",
                                                                                                                                    datasource: "image",
                                                                                                                                    imageObject: WebStaticImageProperty({
                                                                                                                                      "image": { "uri": "img/ConversationalUI$Image_Traces$Azure_outline.svg" }
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
                                                                                                                                    class: "mx-name-image13 unset-img-width",
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
                                                                                                                              key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image9$visibility",
                                                                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image9$visibility",
                                                                                                                              visible: ExpressionProperty({
                                                                                                                                "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Mendix" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3", "source": "object" } } }
                                                                                                                              }),
                                                                                                                              contents: [
                                                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                                                  $Image,
                                                                                                                                  {
                                                                                                                                    key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image9",
                                                                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image9",
                                                                                                                                    datasource: "image",
                                                                                                                                    imageObject: WebStaticImageProperty({
                                                                                                                                      "image": { "uri": "img/ConversationalUI$Image_Traces$cloud_sparkle.svg" }
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
                                                                                                                                    class: "mx-name-image9 unset-img-width",
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
                                                                                                                              key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image15$visibility",
                                                                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image15$visibility",
                                                                                                                              visible: ExpressionProperty({
                                                                                                                                "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Mistral" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3", "source": "object" } } }
                                                                                                                              }),
                                                                                                                              contents: [
                                                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                                                  $Image,
                                                                                                                                  {
                                                                                                                                    key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image15",
                                                                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image15",
                                                                                                                                    datasource: "image",
                                                                                                                                    imageObject: WebStaticImageProperty({
                                                                                                                                      "image": { "uri": "img/ConversationalUI$Image_Traces$Mistral.svg" }
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
                                                                                                                                    class: "mx-name-image15 unset-img-width",
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
                                                                                                                      $Text,
                                                                                                                      {
                                                                                                                        key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text80",
                                                                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text80",
                                                                                                                        class: "mx-name-text80",
                                                                                                                        style: void 0,
                                                                                                                        caption: selectTranslation([
                                                                                                                          ExpressionProperty({
                                                                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "DeployedModelDisplayName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3", "source": "object" } } }
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
                                                                                                            hideFooter: false,
                                                                                                            footer: void 0
                                                                                                          }
                                                                                                        )
                                                                                                      ],
                                                                                                      ariaHidden: false
                                                                                                    }
                                                                                                  ),
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $ConditionalVisibilityWrapper,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container72$visibility",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container72$visibility",
                                                                                                      visible: ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfMCPCalls" }, { "type": "literalNumeric", "value": "0" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfToolCalls" }, { "type": "literalNumeric", "value": "0" }] } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView1", "source": "object" } } }
                                                                                                      }),
                                                                                                      contents: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Container,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container72",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container72",
                                                                                                            class: "mx-name-container72 tooltip-col",
                                                                                                            style: void 0,
                                                                                                            renderMode: "div",
                                                                                                            onClick: void 0,
                                                                                                            content: [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $Text,
                                                                                                                {
                                                                                                                  key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text78",
                                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text78",
                                                                                                                  class: "mx-name-text78 font-weight-semibold",
                                                                                                                  style: void 0,
                                                                                                                  caption: selectTranslation([
                                                                                                                    ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "literal", "value": "Tools\r\n" }, "args": {} }
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
                                                                                                    $ConditionalVisibilityWrapper,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container1$visibility",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container1$visibility",
                                                                                                      visible: ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfMCPCalls" }, { "type": "literalNumeric", "value": "0" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfToolCalls" }, { "type": "literalNumeric", "value": "0" }] } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView1", "source": "object" } } }
                                                                                                      }),
                                                                                                      contents: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Container,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container1",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container1",
                                                                                                            class: "mx-name-container1 tooltip-col",
                                                                                                            style: void 0,
                                                                                                            renderMode: "div",
                                                                                                            onClick: void 0,
                                                                                                            content: [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $ListView,
                                                                                                                {
                                                                                                                  key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1",
                                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1",
                                                                                                                  class: "mx-name-listView1 listview-custom-spacing listview-hide-on-empty listview-remove-spacing listview-stylingless",
                                                                                                                  style: void 0,
                                                                                                                  listValue: DatabaseObjectListProperty({
                                                                                                                    "dataSourceId": "p.38",
                                                                                                                    "entity": "AgentCommons.Tool",
                                                                                                                    "scope": "p.ConversationalUI.Snippet_TraceOverview.dataView5",
                                                                                                                    "operationId": "hldW45PQTFmAIL0GU/Rwqg",
                                                                                                                    "sort": [],
                                                                                                                    "arguments": {
                                                                                                                      "Version": [
                                                                                                                        "p.ConversationalUI.Snippet_TraceOverview.dataView5"
                                                                                                                      ],
                                                                                                                      "CurrentObject": [
                                                                                                                        "p.ConversationalUI.Snippet_TraceOverview.dataView5"
                                                                                                                      ]
                                                                                                                    },
                                                                                                                    "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "AgentCommons.Tool_Version", "context": "AgentCommons.Tool", "attributeType": "ObjectReference" }, { "type": "variable", "name": "Version" }] }
                                                                                                                  }),
                                                                                                                  itemTemplate: TemplatedWidgetProperty({
                                                                                                                    "dataSourceId": "p.38",
                                                                                                                    "editable": false,
                                                                                                                    "children": () => [
                                                                                                                      /* @__PURE__ */ React.createElement(
                                                                                                                        $ConditionalVisibilityWrapper,
                                                                                                                        {
                                                                                                                          key: "p.435",
                                                                                                                          $widgetId: "p.435",
                                                                                                                          visible: ExpressionProperty({
                                                                                                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "type" }, { "type": "literal", "value": "AgentCommons.Tool" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1", "source": "object" } } }
                                                                                                                          }),
                                                                                                                          contents: [
                                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                                              $Container,
                                                                                                                              {
                                                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container30",
                                                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container30",
                                                                                                                                class: "mx-name-container30 row-text-img",
                                                                                                                                style: void 0,
                                                                                                                                renderMode: "div",
                                                                                                                                onClick: void 0,
                                                                                                                                content: [
                                                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                                                    $Image,
                                                                                                                                    {
                                                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image7",
                                                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image7",
                                                                                                                                      datasource: "image",
                                                                                                                                      imageObject: WebStaticImageProperty({
                                                                                                                                        "image": { "uri": "img/ConversationalUI$Image_Traces$microflow.svg" }
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
                                                                                                                                      widthUnit: "pixels",
                                                                                                                                      width: 24,
                                                                                                                                      heightUnit: "auto",
                                                                                                                                      height: 100,
                                                                                                                                      iconSize: 14,
                                                                                                                                      displayAs: "fullImage",
                                                                                                                                      responsive: true,
                                                                                                                                      class: "mx-name-image7 img--20-20",
                                                                                                                                      style: void 0,
                                                                                                                                      tabIndex: void 0
                                                                                                                                    }
                                                                                                                                  ),
                                                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                                                    $Text,
                                                                                                                                    {
                                                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text79",
                                                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text79",
                                                                                                                                      class: "mx-name-text79 text-clamp--1-lines spacing-outer-left-smallest",
                                                                                                                                      style: void 0,
                                                                                                                                      caption: selectTranslation([
                                                                                                                                        ExpressionProperty({
                                                                                                                                          "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1", "source": "object" } } }
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
                                                                                                                        $ConditionalVisibilityWrapper,
                                                                                                                        {
                                                                                                                          key: "p.442",
                                                                                                                          $widgetId: "p.442",
                                                                                                                          visible: ExpressionProperty({
                                                                                                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "type" }, { "type": "literal", "value": "AgentCommons.MCP" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1", "source": "object" } } }
                                                                                                                          }),
                                                                                                                          contents: [
                                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                                              $Container,
                                                                                                                              {
                                                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container36",
                                                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container36",
                                                                                                                                class: "mx-name-container36 row-text-img",
                                                                                                                                style: void 0,
                                                                                                                                renderMode: "div",
                                                                                                                                onClick: void 0,
                                                                                                                                content: [
                                                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                                                    $Image,
                                                                                                                                    {
                                                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image8",
                                                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image8",
                                                                                                                                      datasource: "image",
                                                                                                                                      imageObject: WebStaticImageProperty({
                                                                                                                                        "image": { "uri": "img/ConversationalUI$Image_Traces$MCP.svg" }
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
                                                                                                                                      widthUnit: "pixels",
                                                                                                                                      width: 24,
                                                                                                                                      heightUnit: "auto",
                                                                                                                                      height: 100,
                                                                                                                                      iconSize: 14,
                                                                                                                                      displayAs: "fullImage",
                                                                                                                                      responsive: true,
                                                                                                                                      class: "mx-name-image8 img--20-20",
                                                                                                                                      style: void 0,
                                                                                                                                      tabIndex: void 0
                                                                                                                                    }
                                                                                                                                  ),
                                                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                                                    $Text,
                                                                                                                                    {
                                                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text85",
                                                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text85",
                                                                                                                                      class: "mx-name-text85 text-clamp--1-lines spacing-outer-left-smallest",
                                                                                                                                      style: void 0,
                                                                                                                                      caption: selectTranslation([
                                                                                                                                        ExpressionProperty({
                                                                                                                                          "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1", "source": "object" } } }
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
                                                                                                                        $ConditionalVisibilityWrapper,
                                                                                                                        {
                                                                                                                          key: "p.449",
                                                                                                                          $widgetId: "p.449",
                                                                                                                          visible: ExpressionProperty({
                                                                                                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "type" }, { "type": "literal", "value": "AgentCommons.SingleMCPTool" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1", "source": "object" } } }
                                                                                                                          }),
                                                                                                                          contents: [
                                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                                              $Container,
                                                                                                                              {
                                                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container37",
                                                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container37",
                                                                                                                                class: "mx-name-container37 row-text-img",
                                                                                                                                style: void 0,
                                                                                                                                renderMode: "div",
                                                                                                                                onClick: void 0,
                                                                                                                                content: [
                                                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                                                    $Image,
                                                                                                                                    {
                                                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image11",
                                                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image11",
                                                                                                                                      datasource: "image",
                                                                                                                                      imageObject: WebStaticImageProperty({
                                                                                                                                        "image": { "uri": "img/ConversationalUI$Image_Traces$wrench.svg" }
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
                                                                                                                                      widthUnit: "pixels",
                                                                                                                                      width: 24,
                                                                                                                                      heightUnit: "auto",
                                                                                                                                      height: 100,
                                                                                                                                      iconSize: 14,
                                                                                                                                      displayAs: "fullImage",
                                                                                                                                      responsive: true,
                                                                                                                                      class: "mx-name-image11 img--20-20",
                                                                                                                                      style: void 0,
                                                                                                                                      tabIndex: void 0
                                                                                                                                    }
                                                                                                                                  ),
                                                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                                                    $Text,
                                                                                                                                    {
                                                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text86",
                                                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text86",
                                                                                                                                      class: "mx-name-text86 text-clamp--1-lines spacing-outer-left-smallest",
                                                                                                                                      style: void 0,
                                                                                                                                      caption: selectTranslation([
                                                                                                                                        ExpressionProperty({
                                                                                                                                          "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1", "source": "object" } } }
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
                                                                                                                  }),
                                                                                                                  onClick: void 0,
                                                                                                                  pageSize: 10
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
                                                                                                    $ConditionalVisibilityWrapper,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container73$visibility",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container73$visibility",
                                                                                                      visible: ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfKBCalls" }, { "type": "literalNumeric", "value": "0" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView1", "source": "object" } } }
                                                                                                      }),
                                                                                                      contents: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Container,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container73",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container73",
                                                                                                            class: "mx-name-container73 tooltip-col",
                                                                                                            style: void 0,
                                                                                                            renderMode: "div",
                                                                                                            onClick: void 0,
                                                                                                            content: [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $Text,
                                                                                                                {
                                                                                                                  key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text82",
                                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text82",
                                                                                                                  class: "mx-name-text82 font-weight-semibold",
                                                                                                                  style: void 0,
                                                                                                                  caption: selectTranslation([
                                                                                                                    ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "literal", "value": "Knowledge base\r\n" }, "args": {} }
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
                                                                                                    $ConditionalVisibilityWrapper,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container5$visibility",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container5$visibility",
                                                                                                      visible: ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfKBCalls" }, { "type": "literalNumeric", "value": "0" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView1", "source": "object" } } }
                                                                                                      }),
                                                                                                      contents: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Container,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container5",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container5",
                                                                                                            class: "mx-name-container5 tooltip-col",
                                                                                                            style: void 0,
                                                                                                            renderMode: "div",
                                                                                                            onClick: void 0,
                                                                                                            content: [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $ListView,
                                                                                                                {
                                                                                                                  key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView2",
                                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView2",
                                                                                                                  class: "mx-name-listView2 listview-custom-spacing listview-hide-on-empty listview-remove-spacing listview-stylingless",
                                                                                                                  style: void 0,
                                                                                                                  listValue: DatabaseObjectListProperty({
                                                                                                                    "dataSourceId": "p.39",
                                                                                                                    "entity": "AgentCommons.KnowledgeBase",
                                                                                                                    "scope": "p.ConversationalUI.Snippet_TraceOverview.dataView5",
                                                                                                                    "operationId": "X6qLQEFeFFyHK1Au+CHCyw",
                                                                                                                    "sort": [],
                                                                                                                    "arguments": {
                                                                                                                      "Version": [
                                                                                                                        "p.ConversationalUI.Snippet_TraceOverview.dataView5"
                                                                                                                      ],
                                                                                                                      "CurrentObject": [
                                                                                                                        "p.ConversationalUI.Snippet_TraceOverview.dataView5"
                                                                                                                      ]
                                                                                                                    },
                                                                                                                    "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "AgentCommons.KnowledgeBase_Version", "context": "AgentCommons.KnowledgeBase", "attributeType": "ObjectReference" }, { "type": "variable", "name": "Version" }] }
                                                                                                                  }),
                                                                                                                  itemTemplate: TemplatedWidgetProperty({
                                                                                                                    "dataSourceId": "p.39",
                                                                                                                    "editable": false,
                                                                                                                    "children": () => [
                                                                                                                      /* @__PURE__ */ React.createElement(
                                                                                                                        $Container,
                                                                                                                        {
                                                                                                                          key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container34",
                                                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container34",
                                                                                                                          class: "mx-name-container34 row-text-img",
                                                                                                                          style: void 0,
                                                                                                                          renderMode: "div",
                                                                                                                          onClick: void 0,
                                                                                                                          content: [
                                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                                              $Image,
                                                                                                                              {
                                                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image10",
                                                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image10",
                                                                                                                                datasource: "image",
                                                                                                                                imageObject: WebStaticImageProperty({
                                                                                                                                  "image": { "uri": "img/ConversationalUI$Image_Traces$book_sparkle.svg" }
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
                                                                                                                                widthUnit: "pixels",
                                                                                                                                width: 24,
                                                                                                                                heightUnit: "auto",
                                                                                                                                height: 100,
                                                                                                                                iconSize: 14,
                                                                                                                                displayAs: "fullImage",
                                                                                                                                responsive: true,
                                                                                                                                class: "mx-name-image10 img--20-20",
                                                                                                                                style: void 0,
                                                                                                                                tabIndex: void 0
                                                                                                                              }
                                                                                                                            ),
                                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                                              $Text,
                                                                                                                              {
                                                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text83",
                                                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text83",
                                                                                                                                class: "mx-name-text83 text-clamp--1-lines spacing-outer-left-smallest",
                                                                                                                                style: void 0,
                                                                                                                                caption: selectTranslation([
                                                                                                                                  ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView2", "source": "object" } } }
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
                                                                                                                  }),
                                                                                                                  onClick: void 0,
                                                                                                                  pageSize: 10
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
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container76",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container76",
                                                                                                      class: "mx-name-container76 tooltip-col",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text89",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text89",
                                                                                                            class: "mx-name-text89 font-weight-semibold",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Last edited" }, "args": {} }
                                                                                                              })
                                                                                                            ]),
                                                                                                            renderMode: "span"
                                                                                                          }
                                                                                                        )
                                                                                                      ],
                                                                                                      ariaHidden: false
                                                                                                    }
                                                                                                  ),
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container38",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container38",
                                                                                                      class: "mx-name-container38 tooltip-icon-text",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Image,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image16",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image16",
                                                                                                            datasource: "icon",
                                                                                                            imageObject: void 0,
                                                                                                            defaultImageDynamic: void 0,
                                                                                                            imageUrl: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                              })
                                                                                                            ]),
                                                                                                            imageIcon: WebIconProperty({
                                                                                                              "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$calendar.svg" }
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
                                                                                                            class: "mx-name-image16 unset-img-width",
                                                                                                            style: void 0,
                                                                                                            tabIndex: void 0
                                                                                                          }
                                                                                                        ),
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text90",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text90",
                                                                                                            class: "mx-name-text90",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Version", "path": "VersionChangedDate" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "Version": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView5", "source": "object" } } }
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
                                                                                                ariaHidden: false
                                                                                              }
                                                                                            )
                                                                                          ],
                                                                                          textMessage: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          tooltipPosition: "bottom",
                                                                                          arrowPosition: "end",
                                                                                          openOn: "hover",
                                                                                          class: "mx-name-tooltip3 convui-tooltip",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0
                                                                                        }
                                                                                      )
                                                                                    ],
                                                                                    hideFooter: false,
                                                                                    footer: void 0
                                                                                  }
                                                                                ),
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $DataView,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView2",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView2",
                                                                                    class: "mx-name-dataView2 form-horizontal",
                                                                                    style: void 0,
                                                                                    tabIndex: void 0,
                                                                                    object: AssociationObjectProperty({
                                                                                      "dataSourceId": "p.484",
                                                                                      "scope": "p.ConversationalUI.Snippet_TraceOverview.dataView5",
                                                                                      "editable": true,
                                                                                      "path": "AgentCommons.Version_Agent/AgentCommons.Agent",
                                                                                      "operationId": "Rkh8etAs6VqNGSd0JqCP2g"
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
                                                                                          key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container28$visibility",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container28$visibility",
                                                                                          visible: ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse" }, { "type": "variable", "variable": "Version" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView2", "source": "object" }, "Version": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView5", "source": "object" } } }
                                                                                          }),
                                                                                          contents: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Container,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container28",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container28",
                                                                                                class: "mx-name-container28 circle-badge circle-badge--success",
                                                                                                style: void 0,
                                                                                                renderMode: "div",
                                                                                                onClick: void 0,
                                                                                                content: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container65",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container65",
                                                                                                      class: "mx-name-container65 circle",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: void 0,
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
                                                                                    ],
                                                                                    hideFooter: false,
                                                                                    footer: void 0
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
                                              }),
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
                                            },
                                            {
                                              "showContentAs": "customContent",
                                              "attribute": ListAttributeProperty({
                                                "path": "",
                                                "entity": "GenAICommons.Trace",
                                                "attribute": "StartTime",
                                                "attributeType": "DateTime",
                                                "sortable": true,
                                                "filterable": true,
                                                "dataSourceId": "p.35",
                                                "isList": false
                                              }),
                                              "content": TemplatedWidgetProperty({
                                                "dataSourceId": "p.35",
                                                "editable": false,
                                                "children": () => [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Fragment,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.snippetCall1",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.snippetCall1",
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceStartTime.container1",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceStartTime.container1",
                                                            class: "mx-name-container1 row-text-img",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceStartTime.image10",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceStartTime.image10",
                                                                  datasource: "icon",
                                                                  imageObject: void 0,
                                                                  defaultImageDynamic: void 0,
                                                                  imageUrl: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  imageIcon: WebIconProperty({
                                                                    "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$calendar.svg" }
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
                                                                  class: "mx-name-image10 unset-img-width",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceStartTime.text1",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceStartTime.text1",
                                                                  class: "mx-name-text1",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Trace", "path": "StartTime" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "Trace": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1", "source": "object" } } }
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
                                              }),
                                              "dynamicText": selectTranslation([
                                                void 0
                                              ]),
                                              "exportValue": selectTranslation([
                                                void 0
                                              ]),
                                              "header": selectTranslation([
                                                ExpressionProperty({
                                                  "expression": { "expr": { "type": "literal", "value": "Start time" }, "args": {} }
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
                                                "entity": "GenAICommons.Trace",
                                                "attribute": "DurationMilliseconds",
                                                "attributeType": "Integer",
                                                "sortable": true,
                                                "filterable": true,
                                                "dataSourceId": "p.35",
                                                "isList": false
                                              }),
                                              "content": TemplatedWidgetProperty({
                                                "dataSourceId": "p.35",
                                                "editable": false,
                                                "children": () => [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Fragment,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.snippetCall2",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.snippetCall2",
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceDuration.container1",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceDuration.container1",
                                                            class: "mx-name-container1 row-text-img",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceDuration.image1",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceDuration.image1",
                                                                  datasource: "icon",
                                                                  imageObject: void 0,
                                                                  defaultImageDynamic: void 0,
                                                                  imageUrl: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  imageIcon: WebIconProperty({
                                                                    "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$clock.svg" }
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
                                                                  class: "mx-name-image1 unset-img-width",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceDuration.text1",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceDuration.text1",
                                                                  class: "mx-name-text1",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Trace", "path": "DurationMilliseconds" }, { "type": "literal", "value": null }] }, "then": { "type": "literal", "value": "-" }, "else": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "formatDecimal", "parameters": [{ "type": "function", "name": "round", "parameters": [{ "type": "function", "name": ":", "parameters": [{ "type": "variable", "variable": "Trace", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" }] }, { "type": "literalNumeric", "value": "1" }] }] }, { "type": "literal", "value": "s" }] } }, "args": { "Trace": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1", "source": "object" } } }
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
                                              }),
                                              "dynamicText": selectTranslation([
                                                void 0
                                              ]),
                                              "exportValue": selectTranslation([
                                                void 0
                                              ]),
                                              "header": selectTranslation([
                                                ExpressionProperty({
                                                  "expression": { "expr": { "type": "literal", "value": "Duration" }, "args": {} }
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
                                                "path": "GenAICommons.Trace_Usage/GenAICommons.Usage",
                                                "entity": "GenAICommons.Usage",
                                                "attribute": "DeployedModelDisplayName",
                                                "attributeType": "String",
                                                "sortable": true,
                                                "filterable": true,
                                                "dataSourceId": "p.35",
                                                "isList": false
                                              }),
                                              "content": TemplatedWidgetProperty({
                                                "dataSourceId": "p.35",
                                                "editable": false,
                                                "children": () => [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Fragment,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.snippetCall7",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.snippetCall7",
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $DataView,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceModel.dataView2",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceModel.dataView2",
                                                            class: "mx-name-dataView2 form-horizontal",
                                                            style: void 0,
                                                            tabIndex: void 0,
                                                            object: AssociationObjectProperty({
                                                              "dataSourceId": "p.510",
                                                              "scope": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1",
                                                              "editable": true,
                                                              "path": "GenAICommons.Trace_Usage/GenAICommons.Usage",
                                                              "operationId": "jL/50m6IUV6/DIlf7OVDtA"
                                                            }),
                                                            emptyMessage: TextProperty({
                                                              "value": selectTranslation([
                                                                ""
                                                              ])
                                                            }),
                                                            body: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceModel.container30",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceModel.container30",
                                                                  class: "mx-name-container30 row-text-img",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ConditionalVisibilityWrapper,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceModel.image6$visibility",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceModel.image6$visibility",
                                                                        visible: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "OpenAI" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                                        }),
                                                                        contents: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Image,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceModel.image6",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceModel.image6",
                                                                              datasource: "image",
                                                                              imageObject: WebStaticImageProperty({
                                                                                "image": { "uri": "img/ConversationalUI$Image_Traces$openai.svg" }
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
                                                                              class: "mx-name-image6 unset-img-width",
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
                                                                        key: "p.ConversationalUI.Snippet_TraceModel.image7$visibility",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceModel.image7$visibility",
                                                                        visible: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Bedrock" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                                        }),
                                                                        contents: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Image,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceModel.image7",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceModel.image7",
                                                                              datasource: "image",
                                                                              imageObject: WebStaticImageProperty({
                                                                                "image": { "uri": "img/ConversationalUI$Image_Traces$bedrock.svg" }
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
                                                                              class: "mx-name-image7 unset-img-width",
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
                                                                        key: "p.ConversationalUI.Snippet_TraceModel.image8$visibility",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceModel.image8$visibility",
                                                                        visible: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Azure" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                                        }),
                                                                        contents: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Image,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceModel.image8",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceModel.image8",
                                                                              datasource: "image",
                                                                              imageObject: WebStaticImageProperty({
                                                                                "image": { "uri": "img/ConversationalUI$Image_Traces$Azure_outline.svg" }
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
                                                                              class: "mx-name-image8 unset-img-width",
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
                                                                        key: "p.ConversationalUI.Snippet_TraceModel.image9$visibility",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceModel.image9$visibility",
                                                                        visible: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Mendix" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                                        }),
                                                                        contents: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Image,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceModel.image9",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceModel.image9",
                                                                              datasource: "image",
                                                                              imageObject: WebStaticImageProperty({
                                                                                "image": { "uri": "img/ConversationalUI$Image_Traces$cloud_sparkle.svg" }
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
                                                                              class: "mx-name-image9 unset-img-width",
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
                                                                        key: "p.ConversationalUI.Snippet_TraceModel.image10$visibility",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceModel.image10$visibility",
                                                                        visible: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Mistral" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                                        }),
                                                                        contents: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Image,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceModel.image10",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceModel.image10",
                                                                              datasource: "image",
                                                                              imageObject: WebStaticImageProperty({
                                                                                "image": { "uri": "img/ConversationalUI$Image_Traces$Mistral.svg" }
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
                                                                              class: "mx-name-image10 unset-img-width",
                                                                              style: void 0,
                                                                              tabIndex: void 0
                                                                            }
                                                                          )
                                                                        ]
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Text,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceModel.text80",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceModel.text80",
                                                                        class: "mx-name-text80",
                                                                        style: void 0,
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "DeployedModelDisplayName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
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
                                                            hideFooter: false,
                                                            footer: void 0
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
                                              "width": "autoFit",
                                              "minWidth": "auto",
                                              "minWidthLimit": 100,
                                              "size": 1,
                                              "alignment": "left",
                                              "wrapText": false
                                            },
                                            {
                                              "showContentAs": "customContent",
                                              "content": TemplatedWidgetProperty({
                                                "dataSourceId": "p.35",
                                                "editable": false,
                                                "children": () => [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Fragment,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.snippetCall3",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.snippetCall3",
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceTokens.container30",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container30",
                                                            class: "mx-name-container30 row-left-aligned",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceTokens.image11",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceTokens.image11",
                                                                  datasource: "image",
                                                                  imageObject: WebStaticImageProperty({
                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$token.svg" }
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
                                                                  widthUnit: "pixels",
                                                                  width: 16,
                                                                  heightUnit: "auto",
                                                                  height: 100,
                                                                  iconSize: 14,
                                                                  displayAs: "fullImage",
                                                                  responsive: true,
                                                                  class: "mx-name-image11 unset-img-width",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceTokens.text3",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceTokens.text3",
                                                                  class: "mx-name-text3",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Trace", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/TotalTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, { "type": "literal", "value": " (" }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Trace", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/InputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }] }, { "type": "literal", "value": " / " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Trace", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/OutputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }] }, { "type": "literal", "value": ")" }] }, "args": { "Trace": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1", "source": "object" } } }
                                                                    })
                                                                  ]),
                                                                  renderMode: "span"
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Tooltip,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceTokens.tooltip5",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceTokens.tooltip5",
                                                                  trigger: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ConditionalVisibilityWrapper,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceTokens.actionButton25$visibility",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceTokens.actionButton25$visibility",
                                                                        visible: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                        }),
                                                                        contents: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $ActionButton,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceTokens.actionButton25",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceTokens.actionButton25",
                                                                              buttonId: "p.ConversationalUI.Snippet_TraceTokens.actionButton25",
                                                                              class: "mx-name-actionButton25 tooltip-info-icon btn-sm spacing-outer-bottom-none",
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
                                                                                  ""
                                                                                ])
                                                                              }),
                                                                              icon: WebIconProperty({
                                                                                "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$info_circle_grey.svg" }
                                                                              }),
                                                                              action: ActionProperty({
                                                                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                                                "abortOnServerValidation": true
                                                                              })
                                                                            }
                                                                          )
                                                                        ]
                                                                      }
                                                                    )
                                                                  ],
                                                                  renderMethod: "custom",
                                                                  htmlMessage: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceTokens.container33",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container33",
                                                                        class: "mx-name-container33 tooltip-container-token",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Container,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceTokens.container31",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container31",
                                                                              class: "mx-name-container31 tooltip-row-text-icon",
                                                                              style: void 0,
                                                                              renderMode: "div",
                                                                              onClick: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Image,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceTokens.image5",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceTokens.image5",
                                                                                    datasource: "image",
                                                                                    imageObject: WebStaticImageProperty({
                                                                                      "image": { "uri": "img/ConversationalUI$Image_Traces$token.svg" }
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
                                                                                    class: "mx-name-image5 img--14-20",
                                                                                    style: void 0,
                                                                                    tabIndex: void 0
                                                                                  }
                                                                                ),
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceTokens.text12",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceTokens.text12",
                                                                                    class: "mx-name-text12 font-weight-semibold",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Total tokens" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    renderMode: "span"
                                                                                  }
                                                                                )
                                                                              ],
                                                                              ariaHidden: false
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Container,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceTokens.container32",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container32",
                                                                              class: "mx-name-container32 tooltip-col",
                                                                              style: void 0,
                                                                              renderMode: "div",
                                                                              onClick: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceTokens.text4",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceTokens.text4",
                                                                                    class: "mx-name-text4",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Trace", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/TotalTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, "args": { "Trace": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1", "source": "object" } } }
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
                                                                        ariaHidden: false
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceTokens.container34",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container34",
                                                                        class: "mx-name-container34 divider spacing-inner-none spacing-outer-left spacing-outer-right",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: void 0,
                                                                        ariaHidden: false
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceTokens.container36",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container36",
                                                                        class: "mx-name-container36 tooltip-container-token",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Container,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceTokens.container38",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container38",
                                                                              class: "mx-name-container38 tooltip-row-text-icon",
                                                                              style: void 0,
                                                                              renderMode: "div",
                                                                              onClick: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Image,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceTokens.image9",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceTokens.image9",
                                                                                    datasource: "image",
                                                                                    imageObject: WebStaticImageProperty({
                                                                                      "image": { "uri": "img/ConversationalUI$Image_Traces$token_input.svg" }
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
                                                                                    class: "mx-name-image9 img--14-20",
                                                                                    style: void 0,
                                                                                    tabIndex: void 0
                                                                                  }
                                                                                ),
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceTokens.text8",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceTokens.text8",
                                                                                    class: "mx-name-text8 font-weight-semibold",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Input tokens" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    renderMode: "span"
                                                                                  }
                                                                                )
                                                                              ],
                                                                              ariaHidden: false
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Container,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceTokens.container39",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container39",
                                                                              class: "mx-name-container39 tooltip-col",
                                                                              style: void 0,
                                                                              renderMode: "div",
                                                                              onClick: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceTokens.text5",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceTokens.text5",
                                                                                    class: "mx-name-text5",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Trace", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/InputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, "args": { "Trace": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1", "source": "object" } } }
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
                                                                        ariaHidden: false
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceTokens.container40",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container40",
                                                                        class: "mx-name-container40 divider spacing-inner-none spacing-outer-left spacing-outer-right",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: void 0,
                                                                        ariaHidden: false
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceTokens.container42",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container42",
                                                                        class: "mx-name-container42 tooltip-container-token",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Container,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceTokens.container44",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container44",
                                                                              class: "mx-name-container44 tooltip-row-text-icon",
                                                                              style: void 0,
                                                                              renderMode: "div",
                                                                              onClick: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Image,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceTokens.image13",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceTokens.image13",
                                                                                    datasource: "image",
                                                                                    imageObject: WebStaticImageProperty({
                                                                                      "image": { "uri": "img/ConversationalUI$Image_Traces$token_output.svg" }
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
                                                                                    class: "mx-name-image13 img--14-20",
                                                                                    style: void 0,
                                                                                    tabIndex: void 0
                                                                                  }
                                                                                ),
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceTokens.text10",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceTokens.text10",
                                                                                    class: "mx-name-text10 font-weight-semibold",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Output tokens" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    renderMode: "span"
                                                                                  }
                                                                                )
                                                                              ],
                                                                              ariaHidden: false
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Container,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceTokens.container45",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container45",
                                                                              class: "mx-name-container45 tooltip-col",
                                                                              style: void 0,
                                                                              renderMode: "div",
                                                                              onClick: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceTokens.text7",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceTokens.text7",
                                                                                    class: "mx-name-text7",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Trace", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/OutputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, "args": { "Trace": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1", "source": "object" } } }
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
                                                                        ariaHidden: false
                                                                      }
                                                                    )
                                                                  ],
                                                                  textMessage: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  tooltipPosition: "bottom",
                                                                  arrowPosition: "end",
                                                                  openOn: "hover",
                                                                  class: "mx-name-tooltip5 convui-tooltip",
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
                                                  "expression": { "expr": { "type": "literal", "value": "Tokens" }, "args": {} }
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
                                            },
                                            {
                                              "showContentAs": "customContent",
                                              "content": TemplatedWidgetProperty({
                                                "dataSourceId": "p.35",
                                                "editable": false,
                                                "children": () => [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Fragment,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.snippetCall6",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.snippetCall6",
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $DataView,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceToolCalls.dataView1",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.dataView1",
                                                            class: "mx-name-dataView1 form-horizontal",
                                                            style: void 0,
                                                            tabIndex: void 0,
                                                            object: MicroflowObjectProperty({
                                                              "dataSourceId": "p.585",
                                                              "scope": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1",
                                                              "editable": true,
                                                              "operationId": "E4Z0Jl4DEViLgYqYXZw1NA",
                                                              "argMap": { "Trace": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1", "source": "object" } }
                                                            }),
                                                            emptyMessage: TextProperty({
                                                              "value": selectTranslation([
                                                                ""
                                                              ])
                                                            }),
                                                            body: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceToolCalls.container50",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.container50",
                                                                  class: "mx-name-container50 row-left-aligned",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceToolCalls.container56",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.container56",
                                                                        class: "mx-name-container56 row-left-aligned",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $ConditionalVisibilityWrapper,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceToolCalls.container54$visibility",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.container54$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfToolCalls" }, { "type": "literalNumeric", "value": "0" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceToolCalls.dataView1", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Container,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceToolCalls.container54",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.container54",
                                                                                    class: "mx-name-container54 row-text-img",
                                                                                    style: void 0,
                                                                                    renderMode: "div",
                                                                                    onClick: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Image,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TraceToolCalls.image16",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.image16",
                                                                                          datasource: "image",
                                                                                          imageObject: WebStaticImageProperty({
                                                                                            "image": { "uri": "img/ConversationalUI$Image_Traces$microflow.svg" }
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
                                                                                          widthUnit: "pixels",
                                                                                          width: 24,
                                                                                          heightUnit: "auto",
                                                                                          height: 100,
                                                                                          iconSize: 14,
                                                                                          displayAs: "fullImage",
                                                                                          responsive: true,
                                                                                          class: "mx-name-image16 img--24-24",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0
                                                                                        }
                                                                                      ),
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Text,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TraceToolCalls.text14",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.text14",
                                                                                          class: "mx-name-text14",
                                                                                          style: void 0,
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfToolCalls" }, { "type": "literal", "value": "{}" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceToolCalls.dataView1", "source": "object" } } }
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
                                                                            $ConditionalVisibilityWrapper,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceToolCalls.container55$visibility",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.container55$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfMCPCalls" }, { "type": "literalNumeric", "value": "0" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceToolCalls.dataView1", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Container,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceToolCalls.container55",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.container55",
                                                                                    class: "mx-name-container55 row-text-img",
                                                                                    style: void 0,
                                                                                    renderMode: "div",
                                                                                    onClick: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Image,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TraceToolCalls.image19",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.image19",
                                                                                          datasource: "image",
                                                                                          imageObject: WebStaticImageProperty({
                                                                                            "image": { "uri": "img/ConversationalUI$Image_Traces$wrench.svg" }
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
                                                                                          widthUnit: "pixels",
                                                                                          width: 24,
                                                                                          heightUnit: "auto",
                                                                                          height: 100,
                                                                                          iconSize: 14,
                                                                                          displayAs: "fullImage",
                                                                                          responsive: true,
                                                                                          class: "mx-name-image19 img--24-24",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0
                                                                                        }
                                                                                      ),
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Text,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TraceToolCalls.text15",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.text15",
                                                                                          class: "mx-name-text15",
                                                                                          style: void 0,
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfMCPCalls" }, { "type": "literal", "value": "{}" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceToolCalls.dataView1", "source": "object" } } }
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
                                                                            $ConditionalVisibilityWrapper,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceToolCalls.container51$visibility",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.container51$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfKBCalls" }, { "type": "literalNumeric", "value": "0" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceToolCalls.dataView1", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Container,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceToolCalls.container51",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.container51",
                                                                                    class: "mx-name-container51 row-text-img",
                                                                                    style: void 0,
                                                                                    renderMode: "div",
                                                                                    onClick: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Image,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TraceToolCalls.image18",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.image18",
                                                                                          datasource: "image",
                                                                                          imageObject: WebStaticImageProperty({
                                                                                            "image": { "uri": "img/ConversationalUI$Image_Traces$book_sparkle.svg" }
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
                                                                                          widthUnit: "pixels",
                                                                                          width: 24,
                                                                                          heightUnit: "auto",
                                                                                          height: 100,
                                                                                          iconSize: 14,
                                                                                          displayAs: "fullImage",
                                                                                          responsive: true,
                                                                                          class: "mx-name-image18 img--24-24",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0
                                                                                        }
                                                                                      ),
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Text,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TraceToolCalls.text16",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.text16",
                                                                                          class: "mx-name-text16",
                                                                                          style: void 0,
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfKBCalls" }, { "type": "literal", "value": "{}" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceToolCalls.dataView1", "source": "object" } } }
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
                                                                            $ConditionalVisibilityWrapper,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceToolCalls.container52$visibility",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.container52$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfKBCalls" }, { "type": "literalNumeric", "value": "0" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfMCPCalls" }, { "type": "literalNumeric", "value": "0" }] }, "else": { "type": "literal", "value": false } }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfToolCalls" }, { "type": "literalNumeric", "value": "0" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceToolCalls.dataView1", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Container,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceToolCalls.container52",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.container52",
                                                                                    class: "mx-name-container52 row-text-img",
                                                                                    style: void 0,
                                                                                    renderMode: "div",
                                                                                    onClick: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Text,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TraceToolCalls.text18",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.text18",
                                                                                          class: "mx-name-text18",
                                                                                          style: void 0,
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "-" }, "args": {} }
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
                                                                        ],
                                                                        ariaHidden: false
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ConditionalVisibilityWrapper,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceToolCalls.container2$visibility",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.container2$visibility",
                                                                        visible: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfKBCalls" }, { "type": "literalNumeric", "value": "0" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfMCPCalls" }, { "type": "literalNumeric", "value": "0" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfToolCalls" }, { "type": "literalNumeric", "value": "0" }] } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceToolCalls.dataView1", "source": "object" } } }
                                                                        }),
                                                                        contents: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Container,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceToolCalls.container2",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.container2",
                                                                              class: "mx-name-container2",
                                                                              style: void 0,
                                                                              renderMode: "div",
                                                                              onClick: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Tooltip,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceToolCalls.tooltip6",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.tooltip6",
                                                                                    trigger: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ConditionalVisibilityWrapper,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TraceToolCalls.actionButton29$visibility",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.actionButton29$visibility",
                                                                                          visible: ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                                          }),
                                                                                          contents: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $ActionButton,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceToolCalls.actionButton29",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.actionButton29",
                                                                                                buttonId: "p.ConversationalUI.Snippet_TraceToolCalls.actionButton29",
                                                                                                class: "mx-name-actionButton29 tooltip-info-icon btn-sm spacing-outer-bottom-none",
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
                                                                                                    ""
                                                                                                  ])
                                                                                                }),
                                                                                                icon: WebIconProperty({
                                                                                                  "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$info_circle_grey.svg" }
                                                                                                }),
                                                                                                action: ActionProperty({
                                                                                                  "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                                                                  "abortOnServerValidation": true
                                                                                                })
                                                                                              }
                                                                                            )
                                                                                          ]
                                                                                        }
                                                                                      )
                                                                                    ],
                                                                                    renderMethod: "custom",
                                                                                    htmlMessage: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Container,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TraceToolCalls.container67",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.container67",
                                                                                          class: "mx-name-container67 tooltip-header",
                                                                                          style: void 0,
                                                                                          renderMode: "div",
                                                                                          onClick: void 0,
                                                                                          content: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Text,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceToolCalls.text17",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.text17",
                                                                                                class: "mx-name-text17 font-weight-semibold",
                                                                                                style: void 0,
                                                                                                caption: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "Tools" }, "args": {} }
                                                                                                  })
                                                                                                ]),
                                                                                                renderMode: "span"
                                                                                              }
                                                                                            )
                                                                                          ],
                                                                                          ariaHidden: false
                                                                                        }
                                                                                      ),
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Container,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TraceToolCalls.container1",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.container1",
                                                                                          class: "mx-name-container1 tooltip-container-tools",
                                                                                          style: void 0,
                                                                                          renderMode: "div",
                                                                                          onClick: void 0,
                                                                                          content: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $ListView,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceToolCalls.listView3",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.listView3",
                                                                                                class: "mx-name-listView3 listview-hide-on-empty listview-remove-spacing listview-stylingless",
                                                                                                style: void 0,
                                                                                                listValue: DatabaseObjectListProperty({
                                                                                                  "dataSourceId": "p.44",
                                                                                                  "entity": "GenAICommons.ToolSpan",
                                                                                                  "scope": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1",
                                                                                                  "operationId": "XosHOc/y4VC4dcriEQwT+g",
                                                                                                  "sort": [],
                                                                                                  "arguments": {
                                                                                                    "Trace": [
                                                                                                      "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1"
                                                                                                    ],
                                                                                                    "CurrentObject": [
                                                                                                      "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1"
                                                                                                    ]
                                                                                                  },
                                                                                                  "constraints": { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "GenAICommons.ToolSpan", "attributeType": "ObjectReference" }, "rightEntity": "GenAICommons.Span", "rightEntityAlias": "GenAICommons.Span", "right": { "type": "attribute", "attribute": "GenAICommons.Span_Trace", "context": "GenAICommons.Span", "attributeType": "ObjectReference" }, "next": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "id", "context": "GenAICommons.Span", "attributeType": "ObjectReference" }, { "type": "variable", "name": "Trace" }] } }
                                                                                                }),
                                                                                                itemTemplate: TemplatedWidgetProperty({
                                                                                                  "dataSourceId": "p.44",
                                                                                                  "editable": false,
                                                                                                  "children": () => [
                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                      $ConditionalVisibilityWrapper,
                                                                                                      {
                                                                                                        key: "p.630",
                                                                                                        $widgetId: "p.630",
                                                                                                        visible: ExpressionProperty({
                                                                                                          "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "type" }, { "type": "literal", "value": "GenAICommons.ToolSpan" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceToolCalls.listView3", "source": "object" } } }
                                                                                                        }),
                                                                                                        contents: [
                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                            $Container,
                                                                                                            {
                                                                                                              key: "p.ConversationalUI.Snippet_TraceToolCalls.container32",
                                                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.container32",
                                                                                                              class: "mx-name-container32 row-text-img spacing-outer-bottom-smaller",
                                                                                                              style: void 0,
                                                                                                              renderMode: "div",
                                                                                                              onClick: void 0,
                                                                                                              content: [
                                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                                  $Image,
                                                                                                                  {
                                                                                                                    key: "p.ConversationalUI.Snippet_TraceToolCalls.image9",
                                                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.image9",
                                                                                                                    datasource: "image",
                                                                                                                    imageObject: WebStaticImageProperty({
                                                                                                                      "image": { "uri": "img/ConversationalUI$Image_Traces$microflow.svg" }
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
                                                                                                                    widthUnit: "pixels",
                                                                                                                    width: 24,
                                                                                                                    heightUnit: "auto",
                                                                                                                    height: 100,
                                                                                                                    iconSize: 14,
                                                                                                                    displayAs: "fullImage",
                                                                                                                    responsive: true,
                                                                                                                    class: "mx-name-image9 img--24-24",
                                                                                                                    style: void 0,
                                                                                                                    tabIndex: void 0
                                                                                                                  }
                                                                                                                ),
                                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                                  $Text,
                                                                                                                  {
                                                                                                                    key: "p.ConversationalUI.Snippet_TraceToolCalls.text80",
                                                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.text80",
                                                                                                                    class: "mx-name-text80 text-clamp--1-lines",
                                                                                                                    style: void 0,
                                                                                                                    caption: selectTranslation([
                                                                                                                      ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ToolName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceToolCalls.listView3", "source": "object" } } }
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
                                                                                                      $ConditionalVisibilityWrapper,
                                                                                                      {
                                                                                                        key: "p.637",
                                                                                                        $widgetId: "p.637",
                                                                                                        visible: ExpressionProperty({
                                                                                                          "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "type" }, { "type": "literal", "value": "GenAICommons.MCPSpan" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceToolCalls.listView3", "source": "object" } } }
                                                                                                        }),
                                                                                                        contents: [
                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                            $Container,
                                                                                                            {
                                                                                                              key: "p.ConversationalUI.Snippet_TraceToolCalls.container33",
                                                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.container33",
                                                                                                              class: "mx-name-container33 row-text-img spacing-outer-bottom-smaller",
                                                                                                              style: void 0,
                                                                                                              renderMode: "div",
                                                                                                              onClick: void 0,
                                                                                                              content: [
                                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                                  $Image,
                                                                                                                  {
                                                                                                                    key: "p.ConversationalUI.Snippet_TraceToolCalls.image20",
                                                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.image20",
                                                                                                                    datasource: "image",
                                                                                                                    imageObject: WebStaticImageProperty({
                                                                                                                      "image": { "uri": "img/ConversationalUI$Image_Traces$wrench.svg" }
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
                                                                                                                    widthUnit: "pixels",
                                                                                                                    width: 24,
                                                                                                                    heightUnit: "auto",
                                                                                                                    height: 100,
                                                                                                                    iconSize: 14,
                                                                                                                    displayAs: "fullImage",
                                                                                                                    responsive: true,
                                                                                                                    class: "mx-name-image20 img--24-24",
                                                                                                                    style: void 0,
                                                                                                                    tabIndex: void 0
                                                                                                                  }
                                                                                                                ),
                                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                                  $Text,
                                                                                                                  {
                                                                                                                    key: "p.ConversationalUI.Snippet_TraceToolCalls.text81",
                                                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.text81",
                                                                                                                    class: "mx-name-text81 text-clamp--1-lines",
                                                                                                                    style: void 0,
                                                                                                                    caption: selectTranslation([
                                                                                                                      ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ToolName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceToolCalls.listView3", "source": "object" } } }
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
                                                                                                      $ConditionalVisibilityWrapper,
                                                                                                      {
                                                                                                        key: "p.644",
                                                                                                        $widgetId: "p.644",
                                                                                                        visible: ExpressionProperty({
                                                                                                          "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "type" }, { "type": "literal", "value": "GenAICommons.KnowledgeBaseSpan" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceToolCalls.listView3", "source": "object" } } }
                                                                                                        }),
                                                                                                        contents: [
                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                            $Container,
                                                                                                            {
                                                                                                              key: "p.ConversationalUI.Snippet_TraceToolCalls.container34",
                                                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.container34",
                                                                                                              class: "mx-name-container34 row-text-img spacing-outer-bottom-smaller",
                                                                                                              style: void 0,
                                                                                                              renderMode: "div",
                                                                                                              onClick: void 0,
                                                                                                              content: [
                                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                                  $Image,
                                                                                                                  {
                                                                                                                    key: "p.ConversationalUI.Snippet_TraceToolCalls.image22",
                                                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.image22",
                                                                                                                    datasource: "image",
                                                                                                                    imageObject: WebStaticImageProperty({
                                                                                                                      "image": { "uri": "img/ConversationalUI$Image_Traces$book_sparkle.svg" }
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
                                                                                                                    widthUnit: "pixels",
                                                                                                                    width: 24,
                                                                                                                    heightUnit: "auto",
                                                                                                                    height: 100,
                                                                                                                    iconSize: 14,
                                                                                                                    displayAs: "fullImage",
                                                                                                                    responsive: true,
                                                                                                                    class: "mx-name-image22 img--24-24",
                                                                                                                    style: void 0,
                                                                                                                    tabIndex: void 0
                                                                                                                  }
                                                                                                                ),
                                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                                  $Text,
                                                                                                                  {
                                                                                                                    key: "p.ConversationalUI.Snippet_TraceToolCalls.text82",
                                                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceToolCalls.text82",
                                                                                                                    class: "mx-name-text82 text-clamp--1-lines",
                                                                                                                    style: void 0,
                                                                                                                    caption: selectTranslation([
                                                                                                                      ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ToolName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceToolCalls.listView3", "source": "object" } } }
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
                                                                                                }),
                                                                                                onClick: void 0,
                                                                                                pageSize: 10
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
                                                                                    tooltipPosition: "bottom",
                                                                                    arrowPosition: "end",
                                                                                    openOn: "hover",
                                                                                    class: "mx-name-tooltip6 convui-tooltip",
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
                                                                    )
                                                                  ],
                                                                  ariaHidden: false
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
                                              }),
                                              "dynamicText": selectTranslation([
                                                void 0
                                              ]),
                                              "exportValue": selectTranslation([
                                                void 0
                                              ]),
                                              "header": selectTranslation([
                                                ExpressionProperty({
                                                  "expression": { "expr": { "type": "literal", "value": "Tool calls" }, "args": {} }
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
                                            },
                                            {
                                              "showContentAs": "customContent",
                                              "attribute": ListAttributeProperty({
                                                "path": "",
                                                "entity": "GenAICommons.Trace",
                                                "attribute": "HasError",
                                                "attributeType": "Boolean",
                                                "sortable": true,
                                                "filterable": true,
                                                "dataSourceId": "p.35",
                                                "isList": false
                                              }),
                                              "content": TemplatedWidgetProperty({
                                                "dataSourceId": "p.35",
                                                "editable": false,
                                                "children": () => [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.container24$visibility",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container24$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "HasError" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.container24",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container24",
                                                            class: "mx-name-container24 row-left-aligned",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.container46",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container46",
                                                                  class: "mx-name-container46 row-text-img",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Image,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.image7",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.image7",
                                                                        datasource: "image",
                                                                        imageObject: WebStaticImageProperty({
                                                                          "image": { "uri": "img/ConversationalUI$Image_Traces$alert_triangle.svg" }
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
                                                                        class: "mx-name-image7",
                                                                        style: void 0,
                                                                        tabIndex: void 0
                                                                      }
                                                                    )
                                                                  ],
                                                                  ariaHidden: false
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Tooltip,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceOverview.tooltip3",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceOverview.tooltip3",
                                                                  trigger: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ConditionalVisibilityWrapper,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.actionButton27$visibility",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton27$visibility",
                                                                        visible: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                        }),
                                                                        contents: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $ActionButton,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceOverview.actionButton27",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.actionButton27",
                                                                              buttonId: "p.ConversationalUI.Snippet_TraceOverview.actionButton27",
                                                                              class: "mx-name-actionButton27 tooltip-info-icon btn-sm spacing-outer-bottom-none",
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
                                                                                  ""
                                                                                ])
                                                                              }),
                                                                              icon: WebIconProperty({
                                                                                "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$info_circle_grey.svg" }
                                                                              }),
                                                                              action: ActionProperty({
                                                                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                                                "abortOnServerValidation": true
                                                                              })
                                                                            }
                                                                          )
                                                                        ]
                                                                      }
                                                                    )
                                                                  ],
                                                                  renderMethod: "custom",
                                                                  htmlMessage: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceOverview.container25",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container25",
                                                                        class: "mx-name-container25 tooltip-container",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Container,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceOverview.container26",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container26",
                                                                              class: "mx-name-container26 tooltip-col",
                                                                              style: void 0,
                                                                              renderMode: "div",
                                                                              onClick: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceOverview.text4",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text4",
                                                                                    class: "mx-name-text4 text-normal",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Look inside the logs." }, "args": {} }
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
                                                                        ariaHidden: false
                                                                      }
                                                                    )
                                                                  ],
                                                                  textMessage: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  tooltipPosition: "bottom",
                                                                  arrowPosition: "end",
                                                                  openOn: "hover",
                                                                  class: "mx-name-tooltip3 convui-tooltip",
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
                                                  "expression": { "expr": { "type": "literal", "value": "Error" }, "args": {} }
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
                                          showPagingButtons: "always",
                                          showNumberOfRows: false,
                                          pagingPosition: "bottom",
                                          loadMoreButtonCaption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                            })
                                          ]),
                                          showEmptyPlaceholder: "custom",
                                          emptyPlaceholder: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceOverview.container9$visibility",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container9$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalConversations" }, { "type": "literal", "value": null }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TotalConversations" }, { "type": "literalNumeric", "value": "0" }] } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataView1", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceOverview.container9",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceOverview.container9",
                                                      class: "mx-name-container9 col-centered-aligned",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceOverview.text17",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceOverview.text17",
                                                            class: "mx-name-text17",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "No traces found" }, "args": {} }
                                                              })
                                                            ]),
                                                            renderMode: "h2"
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
                                          rowClass: void 0,
                                          onClickTrigger: "single",
                                          onClick: ListActionProperty({
                                            "action": { "type": "openPage", "argMap": { "param$Trace": { "widget": "p.ConversationalUI.Snippet_TraceOverview.dataGrid2_1", "source": "object" } }, "config": { "name": "ConversationalUI/Trace_Details.page.xml", "location": "content", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                            "abortOnServerValidation": false,
                                            "dataSourceId": "p.35",
                                            "argumentTypes": {}
                                          }),
                                          onSelectionChange: void 0,
                                          filtersPlaceholder: void 0,
                                          columnsSortable: true,
                                          columnsResizable: true,
                                          columnsDraggable: false,
                                          columnsHidable: false,
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
                                          class: "mx-name-dataGrid2_1 datagrid--no-scroll table-hover",
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
                        ],
                        ariaHidden: false
                      }
                    )
                  ],
                  ariaHidden: false
                }
              )
            ],
            hideFooter: true,
            footer: void 0
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Traces Overview"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const url = "/p/traces/";
const style = {};
const content = {
  ...content$1,
  "ConversationalUI.Layout_MasterBase.Main": region$Main
};

export { classes, content, style, title, url };
