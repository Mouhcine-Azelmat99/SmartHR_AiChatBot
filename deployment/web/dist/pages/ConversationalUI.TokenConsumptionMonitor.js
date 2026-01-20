import { reactExports, asPluginWidgets, Fragment, addEnumerations, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import { AssociationObjectListProperty } from '../AssociationObjectListProperty-Bq1c4uSS.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-ALaVt2gM.js';
import { AssociationProperty } from '../AssociationProperty-BQ-xenUM.js';
import '../AttributeProperty-DLZOHEVl.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-Bivq5vCz.js';
import { ListAttributeProperty } from '../ListAttributeProperty-Dsd9EADd.js';
import { MicroflowObjectListProperty } from '../MicroflowObjectListProperty-BR95nzdd.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-V0FBuqFr.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { FormGroup, ValidationProperty } from '../FormGroup-Clh5YKWK.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-C3LJYoNm.js';
import { ComboboxWidgetModule } from '../Combobox-kwA1_Kpz.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { Container } from '../Container-LyamVXag.js';
import { DataView } from '../DataView-BlzHzMI2.js';
import { DatePicker } from '../DatePicker-CL992A7L.js';
import { Div } from '../Div-DznaFJxI.js';
import '../Fragment-C-45CGtT.js';
import { ImageWidgetModule } from '../Image-CNc12AI2.js';
import { LineChartWidgetModule } from '../LineChart-B4n0hEWy.js';
import { Text } from '../Text-mON8QAZM.js';
import { content as content$1 } from '../ConversationalUI.Layout_MasterBase-DJ46kSmY.js';
import { AttributeProperty } from '../CTQxk13g-Cpo2G8Em.js';
import '../BMuJrVqQ-CCtMHjkn.js';
import '../CxMFexew-Djrc9cTX.js';
import '../UeptbR6O-BTpvn_SV.js';
import '../uEIG9e6s-BfLfin4i.js';
import '../CkBXggmw-DpOc9R4C.js';
import '../CxoxYXlg-DglkwELR.js';
import '../CTcC6PjV-DYXKqvux.js';
import '../bdxqAC6d-DXeZKQMd.js';
import '../D2Vzasyw-Cik4kBEJ.js';
import '../DxNyuBBG-BPeNmzCp.js';
import '../B7_8A3ct-D5Y5qINW.js';
import '../F-L0MxFU-C_ISpEfs.js';
import '../index-BuuMIVCm.js';
import '../shared-charts-BA-GB2Lb.js';
import '../InlineText-D4EmJMFt.js';
import '../Atlas_Core.Atlas_TopBar-CKgSzJ5B.js';
import '../DatabaseObjectListProperty-Cmtbu3ww.js';
import '../ListExpressionProperty-CLcrpJsE.js';
import '../WebIconProperty-MLEi2sc0.js';
import '../SidebarToggle-Bw-HLNop.js';
import '../D7vCi_Rn-BKFLWyMt.js';
import '../CGlz0zm4-DhbfSt7O.js';
import '../ScrollContainer-U0HrQ4Hh.js';
import '../MenuBar-BOhekOWd.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const LineChart = Object.getOwnPropertyDescriptor(LineChartWidgetModule, "LineChart")?.value || Object.getOwnPropertyDescriptor(LineChartWidgetModule, "default")?.value;
const { $DataView, $Div, $Container, $Fragment, $Text, $FormGroup, $Combobox, $ConditionalVisibilityWrapper, $Image, $ActionButton, $DatePicker, $LineChart } = asPluginWidgets({ DataView, Div, Container, Fragment, Text, FormGroup, Combobox, ConditionalVisibilityWrapper, Image, ActionButton, DatePicker, LineChart });
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
  ]
});
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p.ConversationalUI.TokenConsumptionMonitor.dataView1",
      $widgetId: "p.ConversationalUI.TokenConsumptionMonitor.dataView1",
      class: "mx-name-dataView1 dataview--display-contents form-vertical",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
        "dataSourceId": "p.39",
        "scope": "$TokenMonitorSettings",
        "editable": true
      }),
      emptyMessage: TextProperty({
        "value": selectTranslation([
          ""
        ])
      }),
      body: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid4",
            $widgetId: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid4",
            class: "mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid container-fluid layoutgrid--full-height",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid4$row0",
                  $widgetId: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid4$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid4$row0$column0",
                        $widgetId: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid4$row0$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.TokenConsumptionMonitor.container1",
                              $widgetId: "p.ConversationalUI.TokenConsumptionMonitor.container1",
                              class: "mx-name-container1 card card-border card--sticky-content spacing-outer-bottom-none",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Fragment,
                                  {
                                    key: "p.ConversationalUI.TokenConsumptionMonitor.snippetCall1",
                                    $widgetId: "p.ConversationalUI.TokenConsumptionMonitor.snippetCall1",
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.layoutGrid2",
                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.layoutGrid2",
                                          class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid spacing-outer-top-large",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid2$row0",
                                                $widgetId: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid2$row0",
                                                class: "row",
                                                style: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Div,
                                                    {
                                                      key: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid2$row0$column0",
                                                      $widgetId: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid2$row0$column0",
                                                      class: "col-lg col-md col",
                                                      style: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.container2",
                                                            $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.container2",
                                                            class: "mx-name-container2 pageheader row-left-aligned spacing-outer-bottom-large",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.text40",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.text40",
                                                                  class: "mx-name-text40 pageheader-title spacing-outer-bottom spacing-outer-right-medium",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "Token consumption monitor" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  renderMode: "h1"
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.container1",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.container1",
                                                                  class: "mx-name-container1 spacing-inner-top",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Fragment,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.snippetCall2",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.snippetCall2",
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $FormGroup,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.comboBox1$formGroup",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.comboBox1$formGroup",
                                                                              class: "mx-name-comboBox1 combobox-model-selection combobox-selection-height-small",
                                                                              style: void 0,
                                                                              control: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Combobox,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.comboBox1",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.comboBox1",
                                                                                    source: "context",
                                                                                    optionsSourceType: "association",
                                                                                    optionsSourceDatabaseDataSource: void 0,
                                                                                    optionsSourceDatabaseCaptionType: "attribute",
                                                                                    optionsSourceDatabaseDefaultValue: void 0,
                                                                                    attributeAssociation: AssociationProperty({
                                                                                      "type": "Reference",
                                                                                      "entity": "ConversationalUI.TokenMonitorSettings",
                                                                                      "path": "",
                                                                                      "attribute": "ConversationalUI.TokenMonitorSettings_DeploymentSelection_Selected",
                                                                                      "endpointEntity": "ConversationalUI.DeploymentSelection",
                                                                                      "selectableObjectsId": "p.0",
                                                                                      "scope": "$TokenMonitorSettings",
                                                                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                                                    }),
                                                                                    optionsSourceAssociationDataSource: AssociationObjectListProperty({
                                                                                      "dataSourceId": "p.0",
                                                                                      "entity": "ConversationalUI.DeploymentSelection",
                                                                                      "scope": "$TokenMonitorSettings",
                                                                                      "operationId": "20gsb9vvAluApSwG/W79SQ",
                                                                                      "directPath": "ConversationalUI.TokenMonitorSettings_DeploymentSelection/ConversationalUI.DeploymentSelection"
                                                                                    }),
                                                                                    optionsSourceAssociationCaptionType: "attribute",
                                                                                    optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                                                                      "path": "",
                                                                                      "entity": "ConversationalUI.DeploymentSelection",
                                                                                      "attribute": "DeploymentIdentifier",
                                                                                      "attributeType": "String",
                                                                                      "sortable": true,
                                                                                      "filterable": true,
                                                                                      "dataSourceId": "p.0",
                                                                                      "isList": false
                                                                                    }),
                                                                                    optionsSourceAssociationCaptionExpression: void 0,
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
                                                                                    optionsSourceAssociationCustomContentType: "yes",
                                                                                    optionsSourceAssociationCustomContent: TemplatedWidgetProperty({
                                                                                      "dataSourceId": "p.0",
                                                                                      "editable": false,
                                                                                      "children": () => [
                                                                                        /* @__PURE__ */ React.createElement(
                                                                                          $Container,
                                                                                          {
                                                                                            key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.container11",
                                                                                            $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.container11",
                                                                                            class: "mx-name-container11 model-selection",
                                                                                            style: void 0,
                                                                                            renderMode: "div",
                                                                                            onClick: void 0,
                                                                                            content: [
                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                $ConditionalVisibilityWrapper,
                                                                                                {
                                                                                                  key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image1$visibility",
                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image1$visibility",
                                                                                                  visible: ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "not", "parameters": [{ "type": "function", "name": "contains", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DeploymentIdentifier" }] }, { "type": "literal", "value": "OpenAI" }] }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "function", "name": "contains", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DeploymentIdentifier" }] }, { "type": "literal", "value": "Mistral" }] }] }, "else": { "type": "literal", "value": false } }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "function", "name": "contains", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DeploymentIdentifier" }] }, { "type": "literal", "value": "Amazon" }] }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.comboBox1", "source": "object" } } }
                                                                                                  }),
                                                                                                  contents: [
                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                      $Image,
                                                                                                      {
                                                                                                        key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image1",
                                                                                                        $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image1",
                                                                                                        datasource: "image",
                                                                                                        imageObject: WebStaticImageProperty({
                                                                                                          "image": { "uri": "img/ConversationalUI$Image_collection$mxcloud.svg" }
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
                                                                                                        class: "mx-name-image1 img--22-22",
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
                                                                                                  key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image2$visibility",
                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image2$visibility",
                                                                                                  visible: ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "contains", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DeploymentIdentifier" }] }, { "type": "literal", "value": "OpenAI" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "contains", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DeploymentIdentifier" }] }, { "type": "literal", "value": "Azure" }] }, { "type": "literal", "value": false }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.comboBox1", "source": "object" } } }
                                                                                                  }),
                                                                                                  contents: [
                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                      $Image,
                                                                                                      {
                                                                                                        key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image2",
                                                                                                        $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image2",
                                                                                                        datasource: "image",
                                                                                                        imageObject: WebStaticImageProperty({
                                                                                                          "image": { "uri": "img/ConversationalUI$Image_collection$openai.svg" }
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
                                                                                                        class: "mx-name-image2 img--22-22",
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
                                                                                                  key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image3$visibility",
                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image3$visibility",
                                                                                                  visible: ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DeploymentIdentifier" }] }, { "type": "literal", "value": "Azure" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.comboBox1", "source": "object" } } }
                                                                                                  }),
                                                                                                  contents: [
                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                      $Image,
                                                                                                      {
                                                                                                        key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image3",
                                                                                                        $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image3",
                                                                                                        datasource: "image",
                                                                                                        imageObject: WebStaticImageProperty({
                                                                                                          "image": { "uri": "img/ConversationalUI$Image_collection$azure.svg" }
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
                                                                                                        class: "mx-name-image3 img--22-22",
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
                                                                                                  key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image4$visibility",
                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image4$visibility",
                                                                                                  visible: ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DeploymentIdentifier" }] }, { "type": "literal", "value": "Amazon" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.comboBox1", "source": "object" } } }
                                                                                                  }),
                                                                                                  contents: [
                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                      $Image,
                                                                                                      {
                                                                                                        key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image4",
                                                                                                        $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image4",
                                                                                                        datasource: "image",
                                                                                                        imageObject: WebStaticImageProperty({
                                                                                                          "image": { "uri": "img/ConversationalUI$Image_collection$bedrock.svg" }
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
                                                                                                        class: "mx-name-image4 img--22-22",
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
                                                                                                  key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image5$visibility",
                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image5$visibility",
                                                                                                  visible: ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "contains", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DeploymentIdentifier" }] }, { "type": "literal", "value": "Mistral" }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "function", "name": "contains", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DeploymentIdentifier" }] }, { "type": "literal", "value": "Amazon" }] }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.comboBox1", "source": "object" } } }
                                                                                                  }),
                                                                                                  contents: [
                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                      $Image,
                                                                                                      {
                                                                                                        key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image5",
                                                                                                        $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.image5",
                                                                                                        datasource: "image",
                                                                                                        imageObject: WebStaticImageProperty({
                                                                                                          "image": { "uri": "img/ConversationalUI$Image_collection$mistral.png" }
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
                                                                                                        class: "mx-name-image5 img--22-22",
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
                                                                                                  key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.text1",
                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.text1",
                                                                                                  class: "mx-name-text1",
                                                                                                  style: void 0,
                                                                                                  caption: selectTranslation([
                                                                                                    ExpressionProperty({
                                                                                                      "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "DeploymentIdentifier" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.comboBox1", "source": "object" } } }
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
                                                                                      "action": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "VEG8tK06D1ecRICKQehaoQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
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
                                                                                    lazyLoading: false,
                                                                                    loadingType: "spinner",
                                                                                    tabIndex: void 0,
                                                                                    id: DerivedUniqueIdProperty({
                                                                                      "widgetId": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.comboBox1"
                                                                                    })
                                                                                  }
                                                                                )
                                                                              ],
                                                                              caption: void 0,
                                                                              labelFor: DerivedUniqueIdProperty({
                                                                                "widgetId": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.comboBox1"
                                                                              }),
                                                                              width: void 0,
                                                                              orientation: "vertical",
                                                                              hasError: ValidationProperty({
                                                                                "inputWidgetId": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DeploymentSelection.comboBox1"
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
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Fragment,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.snippetCall3",
                                                            $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.snippetCall3",
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.text24",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.text24",
                                                                  class: "mx-name-text24 card-title spacing-outer-bottom-large",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "Current month usage" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  renderMode: "h4"
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.container3",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.container3",
                                                                  class: "mx-name-container3 card card-border card-statistics",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Div,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.layoutGrid3",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.layoutGrid3",
                                                                        class: "mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid",
                                                                        style: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Div,
                                                                            {
                                                                              key: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid3$row0",
                                                                              $widgetId: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid3$row0",
                                                                              class: "row",
                                                                              style: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Div,
                                                                                  {
                                                                                    key: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid3$row0$column0",
                                                                                    $widgetId: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid3$row0$column0",
                                                                                    class: "col-lg col-md col",
                                                                                    style: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Text,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.text25",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.text25",
                                                                                          class: "mx-name-text25",
                                                                                          style: void 0,
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "Input tokens" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          renderMode: "h5"
                                                                                        }
                                                                                      ),
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Text,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.text22",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.text22",
                                                                                          class: "mx-name-text22 statistic spacing-outer-bottom-none",
                                                                                          style: void 0,
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "variable", "variable": "TokenMonitorSettings", "path": "InputTokensCurrentMonthString" }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                            })
                                                                                          ]),
                                                                                          renderMode: "h3"
                                                                                        }
                                                                                      )
                                                                                    ]
                                                                                  }
                                                                                ),
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Div,
                                                                                  {
                                                                                    key: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid3$row0$column1",
                                                                                    $widgetId: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid3$row0$column1",
                                                                                    class: "col-lg col-md col",
                                                                                    style: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Text,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.text26",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.text26",
                                                                                          class: "mx-name-text26",
                                                                                          style: void 0,
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "Output tokens" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          renderMode: "h5"
                                                                                        }
                                                                                      ),
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ConditionalVisibilityWrapper,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.text23$visibility",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.text23$visibility",
                                                                                          visible: ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "variable", "variable": "TokenMonitorSettings", "path": "ShowOutput" }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                          }),
                                                                                          contents: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Text,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.text23",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.text23",
                                                                                                class: "mx-name-text23 statistic spacing-outer-bottom-none",
                                                                                                style: void 0,
                                                                                                caption: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "variable", "variable": "TokenMonitorSettings", "path": "OutputTokensCurrentMonthString" }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                                  })
                                                                                                ]),
                                                                                                renderMode: "h3"
                                                                                              }
                                                                                            )
                                                                                          ]
                                                                                        }
                                                                                      ),
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ConditionalVisibilityWrapper,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.text30$visibility",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.text30$visibility",
                                                                                          visible: ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "ShowOutput" }] }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                          }),
                                                                                          contents: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Text,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.text30",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_CurrentMonthUsage.text30",
                                                                                                class: "mx-name-text30 statistic spacing-outer-bottom-none",
                                                                                                style: void 0,
                                                                                                caption: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "N/A" }, "args": {} }
                                                                                                  })
                                                                                                ]),
                                                                                                renderMode: "h3"
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
                                                            ]
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Div,
                                                    {
                                                      key: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid2$row0$column1",
                                                      $widgetId: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid2$row0$column1",
                                                      class: "col-lg-auto col-md-auto col-auto",
                                                      style: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.container12",
                                                            $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.container12",
                                                            class: "mx-name-container12 row-right spacing-inner-top",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.actionButton1$visibility",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.actionButton1$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ActionButton,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.actionButton1",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.actionButton1",
                                                                        buttonId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.actionButton1",
                                                                        class: "mx-name-actionButton1",
                                                                        style: void 0,
                                                                        tabIndex: void 0,
                                                                        renderType: "button",
                                                                        role: void 0,
                                                                        buttonClass: "btn-primary",
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Export" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        tooltip: TextProperty({
                                                                          "value": selectTranslation([
                                                                            ""
                                                                          ])
                                                                        }),
                                                                        icon: void 0,
                                                                        action: ActionProperty({
                                                                          "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "CLxb+nbpRVSO8YnDJKqcdg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                      ]
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid2$row1",
                                                $widgetId: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid2$row1",
                                                class: "row",
                                                style: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Div,
                                                    {
                                                      key: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid2$row1$column0",
                                                      $widgetId: "p.ConversationalUI.TokenConsumptionMonitor.layoutGrid2$row1$column0",
                                                      class: "col-lg col-md col",
                                                      style: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Fragment,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.snippetCall1",
                                                            $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor.snippetCall1",
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.text27",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.text27",
                                                                  class: "mx-name-text27 card-title spacing-outer-bottom-large",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "Detailed usage" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  renderMode: "h4"
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container6",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container6",
                                                                  class: "mx-name-container6 card card-border card--sticky-content spacing-outer-bottom-none",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container8",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container8",
                                                                        class: "mx-name-container8 input-container sticky-header",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Container,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container5",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container5",
                                                                              class: "mx-name-container5 segmented-control segmented-control-custom-margin spacing-outer-bottom-large",
                                                                              style: void 0,
                                                                              renderMode: "div",
                                                                              onClick: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $ConditionalVisibilityWrapper,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton2$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton2$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Week" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "MonthToDate" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "_3Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "_6Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Custom" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "All" }] } }, "else": { "type": "literal", "value": false } }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ActionButton,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton2",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton2",
                                                                                          buttonId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton2",
                                                                                          class: "mx-name-actionButton2",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0,
                                                                                          renderType: "button",
                                                                                          role: void 0,
                                                                                          buttonClass: "btn-default",
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "D" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          tooltip: TextProperty({
                                                                                            "value": selectTranslation([
                                                                                              ""
                                                                                            ])
                                                                                          }),
                                                                                          icon: void 0,
                                                                                          action: ActionProperty({
                                                                                            "action": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "6KXeQFGbJVW493HFKwRCBQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton10$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton10$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Day" }] }, "else": { "type": "literal", "value": false } }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ActionButton,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton10",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton10",
                                                                                          buttonId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton10",
                                                                                          class: "mx-name-actionButton10",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0,
                                                                                          renderType: "button",
                                                                                          role: void 0,
                                                                                          buttonClass: "btn-primary",
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "D" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          tooltip: TextProperty({
                                                                                            "value": selectTranslation([
                                                                                              ""
                                                                                            ])
                                                                                          }),
                                                                                          icon: void 0,
                                                                                          action: ActionProperty({
                                                                                            "action": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "6KXeQFGbJVW493HFKwRCBQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton3$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton3$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Day" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "MonthToDate" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "_3Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "_6Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Custom" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "All" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": null }] } }, "else": { "type": "literal", "value": false } }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ActionButton,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton3",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton3",
                                                                                          buttonId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton3",
                                                                                          class: "mx-name-actionButton3",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0,
                                                                                          renderType: "button",
                                                                                          role: void 0,
                                                                                          buttonClass: "btn-default",
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "W" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          tooltip: TextProperty({
                                                                                            "value": selectTranslation([
                                                                                              ""
                                                                                            ])
                                                                                          }),
                                                                                          icon: void 0,
                                                                                          action: ActionProperty({
                                                                                            "action": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "amug2/UqSFKa22tzqy6/zQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton11$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton11$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Week" }] }, "else": { "type": "literal", "value": false } }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ActionButton,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton11",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton11",
                                                                                          buttonId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton11",
                                                                                          class: "mx-name-actionButton11",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0,
                                                                                          renderType: "button",
                                                                                          role: void 0,
                                                                                          buttonClass: "btn-primary",
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "W" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          tooltip: TextProperty({
                                                                                            "value": selectTranslation([
                                                                                              ""
                                                                                            ])
                                                                                          }),
                                                                                          icon: void 0,
                                                                                          action: ActionProperty({
                                                                                            "action": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "amug2/UqSFKa22tzqy6/zQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton5$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton5$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Day" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Week" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "MonthToDate" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "_3Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "_6Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Custom" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "All" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": null }] } }, "else": { "type": "literal", "value": false } }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ActionButton,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton5",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton5",
                                                                                          buttonId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton5",
                                                                                          class: "mx-name-actionButton5",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0,
                                                                                          renderType: "button",
                                                                                          role: void 0,
                                                                                          buttonClass: "btn-default",
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "M" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          tooltip: TextProperty({
                                                                                            "value": selectTranslation([
                                                                                              ""
                                                                                            ])
                                                                                          }),
                                                                                          icon: void 0,
                                                                                          action: ActionProperty({
                                                                                            "action": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "v8q5pXOhaVeaIDH88iZ9+w", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton12$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton12$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Month" }] }, "else": { "type": "literal", "value": false } }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ActionButton,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton12",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton12",
                                                                                          buttonId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton12",
                                                                                          class: "mx-name-actionButton12",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0,
                                                                                          renderType: "button",
                                                                                          role: void 0,
                                                                                          buttonClass: "btn-primary",
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "M" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          tooltip: TextProperty({
                                                                                            "value": selectTranslation([
                                                                                              ""
                                                                                            ])
                                                                                          }),
                                                                                          icon: void 0,
                                                                                          action: ActionProperty({
                                                                                            "action": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "v8q5pXOhaVeaIDH88iZ9+w", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton4$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton4$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Day" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Week" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "_3Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "_6Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Custom" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "All" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": null }] } }, "else": { "type": "literal", "value": false } }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ActionButton,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton4",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton4",
                                                                                          buttonId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton4",
                                                                                          class: "mx-name-actionButton4",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0,
                                                                                          renderType: "button",
                                                                                          role: void 0,
                                                                                          buttonClass: "btn-default",
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "MTD" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          tooltip: TextProperty({
                                                                                            "value": selectTranslation([
                                                                                              ""
                                                                                            ])
                                                                                          }),
                                                                                          icon: void 0,
                                                                                          action: ActionProperty({
                                                                                            "action": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "YgaT45ZhK12MYjcnqg1YYg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton13$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton13$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "MonthToDate" }] }, "else": { "type": "literal", "value": false } }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ActionButton,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton13",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton13",
                                                                                          buttonId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton13",
                                                                                          class: "mx-name-actionButton13",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0,
                                                                                          renderType: "button",
                                                                                          role: void 0,
                                                                                          buttonClass: "btn-primary",
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "MTD" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          tooltip: TextProperty({
                                                                                            "value": selectTranslation([
                                                                                              ""
                                                                                            ])
                                                                                          }),
                                                                                          icon: void 0,
                                                                                          action: ActionProperty({
                                                                                            "action": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "YgaT45ZhK12MYjcnqg1YYg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton6$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton6$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Day" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Week" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "MonthToDate" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "_6Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Custom" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "All" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": null }] } }, "else": { "type": "literal", "value": false } }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ActionButton,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton6",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton6",
                                                                                          buttonId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton6",
                                                                                          class: "mx-name-actionButton6",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0,
                                                                                          renderType: "button",
                                                                                          role: void 0,
                                                                                          buttonClass: "btn-default",
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "3M" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          tooltip: TextProperty({
                                                                                            "value": selectTranslation([
                                                                                              ""
                                                                                            ])
                                                                                          }),
                                                                                          icon: void 0,
                                                                                          action: ActionProperty({
                                                                                            "action": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "vazpM6GYuVuQR5GyXg29pA", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton14$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton14$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "_3Month" }] }, "else": { "type": "literal", "value": false } }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ActionButton,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton14",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton14",
                                                                                          buttonId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton14",
                                                                                          class: "mx-name-actionButton14",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0,
                                                                                          renderType: "button",
                                                                                          role: void 0,
                                                                                          buttonClass: "btn-primary",
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "3M" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          tooltip: TextProperty({
                                                                                            "value": selectTranslation([
                                                                                              ""
                                                                                            ])
                                                                                          }),
                                                                                          icon: void 0,
                                                                                          action: ActionProperty({
                                                                                            "action": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "vazpM6GYuVuQR5GyXg29pA", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton7$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton7$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Day" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Week" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "MonthToDate" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "_3Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Custom" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "All" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": null }] } }, "else": { "type": "literal", "value": false } }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ActionButton,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton7",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton7",
                                                                                          buttonId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton7",
                                                                                          class: "mx-name-actionButton7",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0,
                                                                                          renderType: "button",
                                                                                          role: void 0,
                                                                                          buttonClass: "btn-default",
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "6M" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          tooltip: TextProperty({
                                                                                            "value": selectTranslation([
                                                                                              ""
                                                                                            ])
                                                                                          }),
                                                                                          icon: void 0,
                                                                                          action: ActionProperty({
                                                                                            "action": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "OXnA9MLaCFq8lguCVokRHg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton15$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton15$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "_6Month" }] }, "else": { "type": "literal", "value": false } }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ActionButton,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton15",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton15",
                                                                                          buttonId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton15",
                                                                                          class: "mx-name-actionButton15",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0,
                                                                                          renderType: "button",
                                                                                          role: void 0,
                                                                                          buttonClass: "btn-primary",
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "6M" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          tooltip: TextProperty({
                                                                                            "value": selectTranslation([
                                                                                              ""
                                                                                            ])
                                                                                          }),
                                                                                          icon: void 0,
                                                                                          action: ActionProperty({
                                                                                            "action": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "OXnA9MLaCFq8lguCVokRHg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton16$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton16$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Day" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Week" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "MonthToDate" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "_3Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "_6Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Custom" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": null }] } }, "else": { "type": "literal", "value": false } }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ActionButton,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton16",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton16",
                                                                                          buttonId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton16",
                                                                                          class: "mx-name-actionButton16",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0,
                                                                                          renderType: "button",
                                                                                          role: void 0,
                                                                                          buttonClass: "btn-default",
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "All" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          tooltip: TextProperty({
                                                                                            "value": selectTranslation([
                                                                                              ""
                                                                                            ])
                                                                                          }),
                                                                                          icon: void 0,
                                                                                          action: ActionProperty({
                                                                                            "action": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "1tPpt2/MNlSpCzArxFgnmg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton8$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton8$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "All" }] }, "else": { "type": "literal", "value": false } }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ActionButton,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton8",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton8",
                                                                                          buttonId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton8",
                                                                                          class: "mx-name-actionButton8",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0,
                                                                                          renderType: "button",
                                                                                          role: void 0,
                                                                                          buttonClass: "btn-primary",
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "All" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          tooltip: TextProperty({
                                                                                            "value": selectTranslation([
                                                                                              ""
                                                                                            ])
                                                                                          }),
                                                                                          icon: void 0,
                                                                                          action: ActionProperty({
                                                                                            "action": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "1tPpt2/MNlSpCzArxFgnmg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton9$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton9$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Day" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Week" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "MonthToDate" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "_3Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "_6Month" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "All" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": null }] } }, "else": { "type": "literal", "value": false } }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ActionButton,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton9",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton9",
                                                                                          buttonId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton9",
                                                                                          class: "mx-name-actionButton9",
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
                                                                                            "action": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "QhY4OEdm71CfI43yTt5vPA", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton17$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton17$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Custom" }] }, "else": { "type": "literal", "value": false } }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ActionButton,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton17",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton17",
                                                                                          buttonId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.actionButton17",
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
                                                                                            "action": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "QhY4OEdm71CfI43yTt5vPA", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                            $ConditionalVisibilityWrapper,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container9$visibility",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container9$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "MonthToDate" }] }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Container,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container9",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container9",
                                                                                    class: "mx-name-container9 segmented-control-custom-margin",
                                                                                    style: void 0,
                                                                                    renderMode: "div",
                                                                                    onClick: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Text,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.text2",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.text2",
                                                                                          class: "mx-name-text2",
                                                                                          style: void 0,
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "Month-to-date shows the beginning of the UTC month until the current moment.\r\nTimestamps are displayed in the user's local timezone." }, "args": {} }
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
                                                                              key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container4$visibility",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container4$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "TokenMonitorSettings", "path": "TimeRange" }, { "type": "literal", "value": "Custom" }] }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Container,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container4",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container4",
                                                                                    class: "mx-name-container4 datetime-inputs-wrapper spacing-outer-bottom-large",
                                                                                    style: void 0,
                                                                                    renderMode: "div",
                                                                                    onClick: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $FormGroup,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker1$formGroup",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker1$formGroup",
                                                                                          class: "mx-name-datePicker1 date-input mx-datepicker",
                                                                                          style: void 0,
                                                                                          control: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $DatePicker,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker1",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker1",
                                                                                                mode: "date",
                                                                                                showCalendarButton: true,
                                                                                                inputValue: AttributeProperty({
                                                                                                  "scope": "$TokenMonitorSettings",
                                                                                                  "path": "",
                                                                                                  "entity": "ConversationalUI.TokenMonitorSettings",
                                                                                                  "attribute": "DateFrom",
                                                                                                  "onChange": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "VEG8tK06D1ecRICKQehaoQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                                                  "isList": false,
                                                                                                  "validation": null,
                                                                                                  "formatting": {
                                                                                                    "dateFormat": selectTranslation([
                                                                                                      {
                                                                                                        "type": "date"
                                                                                                      }
                                                                                                    ])
                                                                                                  }
                                                                                                }),
                                                                                                placeholder: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                  })
                                                                                                ]),
                                                                                                buttonLabel: TextProperty({
                                                                                                  "value": selectTranslation([
                                                                                                    "Show date picker"
                                                                                                  ])
                                                                                                }),
                                                                                                readOnlyStyle: "control",
                                                                                                onEnter: void 0,
                                                                                                onLeave: void 0,
                                                                                                ariaLabel: void 0,
                                                                                                ariaRequired: void 0,
                                                                                                tabIndex: void 0,
                                                                                                id: DerivedUniqueIdProperty({
                                                                                                  "widgetId": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker1"
                                                                                                })
                                                                                              }
                                                                                            )
                                                                                          ],
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "Date from" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          labelFor: DerivedUniqueIdProperty({
                                                                                            "widgetId": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker1"
                                                                                          }),
                                                                                          width: void 0,
                                                                                          orientation: "vertical",
                                                                                          hasError: ValidationProperty({
                                                                                            "inputWidgetId": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker1"
                                                                                          })
                                                                                        }
                                                                                      ),
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $FormGroup,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker3$formGroup",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker3$formGroup",
                                                                                          class: "mx-name-datePicker3 time-input mx-datepicker",
                                                                                          style: void 0,
                                                                                          control: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $DatePicker,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker3",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker3",
                                                                                                mode: "time",
                                                                                                showCalendarButton: false,
                                                                                                inputValue: AttributeProperty({
                                                                                                  "scope": "$TokenMonitorSettings",
                                                                                                  "path": "",
                                                                                                  "entity": "ConversationalUI.TokenMonitorSettings",
                                                                                                  "attribute": "DateFrom",
                                                                                                  "onChange": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "VEG8tK06D1ecRICKQehaoQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                                                  "isList": false,
                                                                                                  "validation": null,
                                                                                                  "formatting": {
                                                                                                    "dateFormat": selectTranslation([
                                                                                                      {
                                                                                                        "type": "time"
                                                                                                      }
                                                                                                    ])
                                                                                                  }
                                                                                                }),
                                                                                                placeholder: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                  })
                                                                                                ]),
                                                                                                buttonLabel: TextProperty({
                                                                                                  "value": selectTranslation([
                                                                                                    "Show date picker"
                                                                                                  ])
                                                                                                }),
                                                                                                readOnlyStyle: "control",
                                                                                                onEnter: void 0,
                                                                                                onLeave: void 0,
                                                                                                ariaLabel: void 0,
                                                                                                ariaRequired: void 0,
                                                                                                tabIndex: void 0,
                                                                                                id: DerivedUniqueIdProperty({
                                                                                                  "widgetId": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker3"
                                                                                                })
                                                                                              }
                                                                                            )
                                                                                          ],
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "Time from" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          labelFor: DerivedUniqueIdProperty({
                                                                                            "widgetId": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker3"
                                                                                          }),
                                                                                          width: void 0,
                                                                                          orientation: "vertical",
                                                                                          hasError: ValidationProperty({
                                                                                            "inputWidgetId": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker3"
                                                                                          })
                                                                                        }
                                                                                      ),
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $FormGroup,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker2$formGroup",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker2$formGroup",
                                                                                          class: "mx-name-datePicker2 date-input mx-datepicker",
                                                                                          style: void 0,
                                                                                          control: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $DatePicker,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker2",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker2",
                                                                                                mode: "date",
                                                                                                showCalendarButton: true,
                                                                                                inputValue: AttributeProperty({
                                                                                                  "scope": "$TokenMonitorSettings",
                                                                                                  "path": "",
                                                                                                  "entity": "ConversationalUI.TokenMonitorSettings",
                                                                                                  "attribute": "DateTo",
                                                                                                  "onChange": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "VEG8tK06D1ecRICKQehaoQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                                                  "isList": false,
                                                                                                  "validation": null,
                                                                                                  "formatting": {
                                                                                                    "dateFormat": selectTranslation([
                                                                                                      {
                                                                                                        "type": "date"
                                                                                                      }
                                                                                                    ])
                                                                                                  }
                                                                                                }),
                                                                                                placeholder: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                  })
                                                                                                ]),
                                                                                                buttonLabel: TextProperty({
                                                                                                  "value": selectTranslation([
                                                                                                    "Show date picker"
                                                                                                  ])
                                                                                                }),
                                                                                                readOnlyStyle: "control",
                                                                                                onEnter: void 0,
                                                                                                onLeave: void 0,
                                                                                                ariaLabel: void 0,
                                                                                                ariaRequired: void 0,
                                                                                                tabIndex: void 0,
                                                                                                id: DerivedUniqueIdProperty({
                                                                                                  "widgetId": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker2"
                                                                                                })
                                                                                              }
                                                                                            )
                                                                                          ],
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "Date to" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          labelFor: DerivedUniqueIdProperty({
                                                                                            "widgetId": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker2"
                                                                                          }),
                                                                                          width: void 0,
                                                                                          orientation: "vertical",
                                                                                          hasError: ValidationProperty({
                                                                                            "inputWidgetId": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker2"
                                                                                          })
                                                                                        }
                                                                                      ),
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $FormGroup,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker4$formGroup",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker4$formGroup",
                                                                                          class: "mx-name-datePicker4 time-input mx-datepicker",
                                                                                          style: void 0,
                                                                                          control: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $DatePicker,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker4",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker4",
                                                                                                mode: "time",
                                                                                                showCalendarButton: false,
                                                                                                inputValue: AttributeProperty({
                                                                                                  "scope": "$TokenMonitorSettings",
                                                                                                  "path": "",
                                                                                                  "entity": "ConversationalUI.TokenMonitorSettings",
                                                                                                  "attribute": "DateTo",
                                                                                                  "onChange": { "type": "callMicroflow", "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } }, "config": { "operationId": "VEG8tK06D1ecRICKQehaoQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                                                  "isList": false,
                                                                                                  "validation": null,
                                                                                                  "formatting": {
                                                                                                    "dateFormat": selectTranslation([
                                                                                                      {
                                                                                                        "type": "time"
                                                                                                      }
                                                                                                    ])
                                                                                                  }
                                                                                                }),
                                                                                                placeholder: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                  })
                                                                                                ]),
                                                                                                buttonLabel: TextProperty({
                                                                                                  "value": selectTranslation([
                                                                                                    "Show date picker"
                                                                                                  ])
                                                                                                }),
                                                                                                readOnlyStyle: "control",
                                                                                                onEnter: void 0,
                                                                                                onLeave: void 0,
                                                                                                ariaLabel: void 0,
                                                                                                ariaRequired: void 0,
                                                                                                tabIndex: void 0,
                                                                                                id: DerivedUniqueIdProperty({
                                                                                                  "widgetId": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker4"
                                                                                                })
                                                                                              }
                                                                                            )
                                                                                          ],
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "Time to" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          labelFor: DerivedUniqueIdProperty({
                                                                                            "widgetId": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker4"
                                                                                          }),
                                                                                          width: void 0,
                                                                                          orientation: "vertical",
                                                                                          hasError: ValidationProperty({
                                                                                            "inputWidgetId": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.datePicker4"
                                                                                          })
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
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container7",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container7",
                                                                        class: "mx-name-container7 spacing-outer-top-medium",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.text28",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.text28",
                                                                              class: "mx-name-text28 card-title spacing-outer-top-large spacing-outer-bottom-none",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Input token consumption" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              renderMode: "h4"
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $LineChart,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.lineChart1",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.lineChart1",
                                                                              lines: [
                                                                                {
                                                                                  "dataSet": "static",
                                                                                  "staticDataSource": MicroflowObjectListProperty({
                                                                                    "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } },
                                                                                    "dataSourceId": "p.35",
                                                                                    "entity": "ConversationalUI.UsageBin",
                                                                                    "scope": "$TokenMonitorSettings",
                                                                                    "operationId": "WjCWNIqRdlW1VZwFN/96UA"
                                                                                  }),
                                                                                  "staticName": selectTranslation([
                                                                                    ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "literal", "value": "<b>Input tokens</b>" }, "args": {} }
                                                                                    })
                                                                                  ]),
                                                                                  "staticXAttribute": ListAttributeProperty({
                                                                                    "path": "",
                                                                                    "entity": "ConversationalUI.UsageBin",
                                                                                    "attribute": "Timestamp",
                                                                                    "attributeType": "DateTime",
                                                                                    "sortable": true,
                                                                                    "filterable": true,
                                                                                    "dataSourceId": "p.35",
                                                                                    "isList": false
                                                                                  }),
                                                                                  "staticYAttribute": ListAttributeProperty({
                                                                                    "path": "",
                                                                                    "entity": "ConversationalUI.UsageBin",
                                                                                    "attribute": "InputTokens",
                                                                                    "attributeType": "Integer",
                                                                                    "sortable": true,
                                                                                    "filterable": true,
                                                                                    "dataSourceId": "p.35",
                                                                                    "isList": false
                                                                                  }),
                                                                                  "aggregationType": "none",
                                                                                  "staticTooltipHoverText": selectTranslation([
                                                                                    void 0
                                                                                  ]),
                                                                                  "interpolation": "linear",
                                                                                  "lineStyle": "line",
                                                                                  "customSeriesOptions": '{\r\n  "type": "scatter",\r\n  "orientation": "v",\r\n  "fill": "tozeroy",\r\n  "mode": "lines",\r\n  "hoverinfo": "x+y"\r\n}',
                                                                                  "staticOnClickAction": void 0
                                                                                }
                                                                              ],
                                                                              enableAdvancedOptions: false,
                                                                              xAxisLabel: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              yAxisLabel: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              showLegend: true,
                                                                              gridLines: "none",
                                                                              widthUnit: "percentage",
                                                                              width: 100,
                                                                              heightUnit: "percentageOfWidth",
                                                                              height: 30,
                                                                              enableThemeConfig: false,
                                                                              customLayout: '{ "hovermode": "x",\r\n  "hoverdistance":  -1,\r\n  "spikedistance": -1,\r\n  "automargin": true,\r\n  "legend": {\r\n    "itemclick": false,\r\n    "x": 1,\r\n    "xanchor": "right",\r\n    "y": 1.1,\r\n    "font": {\r\n    "family": "Arial, sans-serif",\r\n    "size": 12\r\n    }\r\n  },\r\n  "xaxis": {\r\n    "showspikes": true,\r\n    "spikemode": "across",\r\n    "spikesnap": "data",\r\n    "spikethickness": 1,\r\n    "spikecolor": "#6c717e",\r\n    "spikedash": "solid",\r\n    "title": {\r\n      "text": "<b>Date (local timezone)</b>",\r\n      "standoff":  16,\r\n      "font": {\r\n        "family": "Arial, sans-serif",\r\n        "size": 12\r\n      }\r\n    },\r\n    "color": "#6c717e",\r\n    "showgrid": false,\r\n    "fixedrange": true,\r\n    "showline": true,\r\n    "linewidth": 1,\r\n    "type": "date",\r\n    "ticks": "outside",\r\n    "ticklen": 5,\r\n    "tickwidth": 1,\r\n    "tickcolor": "#6c717e",\r\n     "tickfont": {\r\n      "family": "Arial, sans-serif",\r\n      "size": 12,\r\n      "color": "#6c717e"\r\n    }\r\n  },\r\n  "yaxis": {\r\n    "rangemode": "tozero",\r\n    "gridcolor": "#eaeaea",\r\n    "title": {\r\n      "text": "<b>Token consumption</b>",\r\n      "standoff":  16,\r\n      "font": {\r\n        "family": "Arial, sans-serif",\r\n        "size": 12\r\n      }\r\n    },\r\n     "tickfont": {\r\n      "family": "Arial, sans-serif",\r\n      "size": 12,\r\n      "color": "#6c717e"\r\n    },\r\n    "color": "#6c717e",\r\n    "showgrid": true,\r\n    "showline": false,\r\n    "fixedrange": true,\r\n    "exponentformat": "SI",\r\n    "minexponent": 2\r\n  }\r\n}',
                                                                              customConfigurations: "",
                                                                              showPlaygroundSlot: false,
                                                                              playground: void 0,
                                                                              class: "mx-name-lineChart1 chart-input spacing-outer-bottom-large",
                                                                              style: void 0,
                                                                              tabIndex: void 0
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $ConditionalVisibilityWrapper,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container10$visibility",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container10$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "variable", "variable": "TokenMonitorSettings", "path": "ShowOutput" }, "args": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Container,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container10",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.container10",
                                                                                    class: "mx-name-container10 card-border-top spacing-outer-top-medium",
                                                                                    style: void 0,
                                                                                    renderMode: "div",
                                                                                    onClick: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Text,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.text29",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.text29",
                                                                                          class: "mx-name-text29 card-title spacing-outer-top-large spacing-outer-bottom-none",
                                                                                          style: void 0,
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "Output token consumption" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          renderMode: "h4"
                                                                                        }
                                                                                      ),
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $LineChart,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.lineChart2",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TokenConsumptionMonitor_DetailedUsage.lineChart2",
                                                                                          lines: [
                                                                                            {
                                                                                              "dataSet": "static",
                                                                                              "staticDataSource": MicroflowObjectListProperty({
                                                                                                "argMap": { "TokenMonitorSettings": { "widget": "$TokenMonitorSettings", "source": "object" } },
                                                                                                "dataSourceId": "p.36",
                                                                                                "entity": "ConversationalUI.UsageBin",
                                                                                                "scope": "$TokenMonitorSettings",
                                                                                                "operationId": "rnFf9/CzflC6CTCi3s+Uiw"
                                                                                              }),
                                                                                              "staticName": selectTranslation([
                                                                                                ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "literal", "value": "<b>Output tokens</b>" }, "args": {} }
                                                                                                })
                                                                                              ]),
                                                                                              "staticXAttribute": ListAttributeProperty({
                                                                                                "path": "",
                                                                                                "entity": "ConversationalUI.UsageBin",
                                                                                                "attribute": "Timestamp",
                                                                                                "attributeType": "DateTime",
                                                                                                "sortable": true,
                                                                                                "filterable": true,
                                                                                                "dataSourceId": "p.36",
                                                                                                "isList": false
                                                                                              }),
                                                                                              "staticYAttribute": ListAttributeProperty({
                                                                                                "path": "",
                                                                                                "entity": "ConversationalUI.UsageBin",
                                                                                                "attribute": "OutputTokens",
                                                                                                "attributeType": "Integer",
                                                                                                "sortable": true,
                                                                                                "filterable": true,
                                                                                                "dataSourceId": "p.36",
                                                                                                "isList": false
                                                                                              }),
                                                                                              "aggregationType": "none",
                                                                                              "staticTooltipHoverText": selectTranslation([
                                                                                                void 0
                                                                                              ]),
                                                                                              "interpolation": "linear",
                                                                                              "lineStyle": "line",
                                                                                              "customSeriesOptions": '{\r\n  "type": "scatter",\r\n  "orientation": "v",\r\n  "fill": "tozeroy",\r\n  "mode": "lines",\r\n  "hoverinfo": "x+y"\r\n}',
                                                                                              "staticOnClickAction": void 0
                                                                                            }
                                                                                          ],
                                                                                          enableAdvancedOptions: false,
                                                                                          xAxisLabel: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          yAxisLabel: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          showLegend: true,
                                                                                          gridLines: "none",
                                                                                          widthUnit: "percentage",
                                                                                          width: 100,
                                                                                          heightUnit: "percentageOfWidth",
                                                                                          height: 30,
                                                                                          enableThemeConfig: false,
                                                                                          customLayout: '{ "hovermode": "x",\r\n  "hoverdistance":  -1,\r\n  "spikedistance": -1,\r\n  "automargin": true,\r\n  "legend": {\r\n    "itemclick": false,\r\n    "x": 1,\r\n    "xanchor": "right",\r\n    "y": 1.1,\r\n    "font": {\r\n    "family": "Arial, sans-serif",\r\n    "size": 12\r\n    }\r\n  },\r\n  "xaxis": {\r\n    "showspikes": true,\r\n    "spikemode": "across",\r\n    "spikesnap": "data",\r\n    "spikethickness": 1,\r\n    "spikecolor": "#6c717e",\r\n    "spikedash": "solid",\r\n    "title": {\r\n      "text": "<b>Date (local timezone)</b>",\r\n      "standoff":  16,\r\n      "font": {\r\n        "family": "Arial, sans-serif",\r\n        "size": 12\r\n      }\r\n    },\r\n    "color": "#6c717e",\r\n    "showgrid": false,\r\n    "fixedrange": true,\r\n    "showline": true,\r\n    "linewidth": 1,\r\n    "type": "date",\r\n    "ticks": "outside",\r\n    "ticklen": 5,\r\n    "tickwidth": 1,\r\n    "tickcolor": "#6c717e",\r\n     "tickfont": {\r\n      "family": "Arial, sans-serif",\r\n      "size": 12,\r\n      "color": "#6c717e"\r\n    }\r\n  },\r\n  "yaxis": {\r\n    "rangemode": "tozero",\r\n    "gridcolor": "#eaeaea",\r\n    "title": {\r\n      "text": "<b>Token consumption</b>",\r\n      "standoff":  16,\r\n      "font": {\r\n        "family": "Arial, sans-serif",\r\n        "size": 12\r\n      }\r\n    },\r\n     "tickfont": {\r\n      "family": "Arial, sans-serif",\r\n      "size": 12,\r\n      "color": "#6c717e"\r\n    },\r\n    "color": "#6c717e",\r\n    "showgrid": true,\r\n    "showline": false,\r\n    "fixedrange": true,\r\n    "exponentformat": "SI",\r\n    "minexponent": 2\r\n  }\r\n}',
                                                                                          customConfigurations: "",
                                                                                          showPlaygroundSlot: false,
                                                                                          playground: void 0,
                                                                                          class: "mx-name-lineChart2 chart-output",
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
                                                                  ariaHidden: false
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
                  ]
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
]);
const title = selectTranslation([
  "Token consumption monitor"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const style = {};
const content = {
  ...content$1,
  "ConversationalUI.Layout_MasterBase.Main": region$Main
};

export { classes, content, style, title };
