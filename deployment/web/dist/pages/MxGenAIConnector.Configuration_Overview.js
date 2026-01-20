import { reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-B-pQLZz2.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C1uYYDJ5.js';
import { ActionButton, ActionProperty } from '../ActionButton-C47bDiwH.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BrlLyOx6.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-Dk1DF3Sc.js';
import { ListenObjectProperty } from '../ListenObjectProperty-DmZdFXhW.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-viDAZSOp.js';
import { TextProperty } from '../TextProperty-ukMsrrP8.js';
import { WebIconProperty } from '../WebIconProperty-B4eQIHHv.js';
import { WidgetVariableProperty } from '../WidgetVariableProperty-Coa3b9-v.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C-2xhd5O.js';
import { Container } from '../Container-CTbE-yQS.js';
import { DataView } from '../DataView-DtIsQy7l.js';
import { Div } from '../Div-C2k8MuH7.js';
import '../Fragment-C3M8OT7J.js';
import { ListView } from '../ListView-CtnOFRNF.js';
import { TabContainer } from '../TabContainer-DBKDNiai.js';
import { Text } from '../Text-5NmEA291.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-C6LAOzGy.js';
import '../CkBXggmw-CEa7-Kz-.js';
import '../UeptbR6O-9Cnv5Sxb.js';
import '../uEIG9e6s-CoI72Q4o.js';
import '../CxoxYXlg-rXnL4f6K.js';
import '../bdxqAC6d-ISZWqfJE.js';
import '../D7vCi_Rn-Dtbqkh4B.js';
import '../D2Vzasyw-shqqrM0Q.js';
import '../InlineText-CcVi-f0x.js';
import '../ListExpressionProperty-Blkk1P49.js';
import '../CTcC6PjV-CLE6jBCq.js';
import '../WebStaticImageProperty-D6HpETLo.js';
import '../Image-CwuIpbpH.js';
import '../index-CgEeXS6W.js';
import '../SidebarToggle-U7U0qqOC.js';
import '../CGlz0zm4-CawGDyow.js';
import '../ScrollContainer-B-pXvHDA.js';

const React = { createElement: reactExports.createElement };
const { $Div, $Text, $Fragment, $Container, $ConditionalVisibilityWrapper, $ActionButton, $TabContainer, $ListView, $DataView } = asPluginWidgets({ Div, Text, Fragment, Container, ConditionalVisibilityWrapper, ActionButton, TabContainer, ListView, DataView });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MxGenAIConnector.Configuration_Overview.layoutGrid1",
      $widgetId: "p.MxGenAIConnector.Configuration_Overview.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row0",
            $widgetId: "p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row0$column0",
                  $widgetId: "p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Text,
                      {
                        key: "p.MxGenAIConnector.Configuration_Overview.text7",
                        $widgetId: "p.MxGenAIConnector.Configuration_Overview.text7",
                        class: "mx-name-text7",
                        style: void 0,
                        caption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "GenAI Resources" }, "args": {} }
                          })
                        ]),
                        renderMode: "h2"
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Fragment,
                      {
                        key: "p.MxGenAIConnector.Configuration_Overview.snippetCall1",
                        $widgetId: "p.MxGenAIConnector.Configuration_Overview.snippetCall1",
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.MxGenAIConnector.Snippet_Configuration.container1",
                              $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container1",
                              class: "mx-name-container1 card",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p.MxGenAIConnector.Snippet_Configuration.layoutGrid1",
                                    $widgetId: "p.MxGenAIConnector.Snippet_Configuration.layoutGrid1",
                                    class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row0.37",
                                          $widgetId: "p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row0.37",
                                          class: "row",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row0$column0.38",
                                                $widgetId: "p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row0$column0.38",
                                                class: "col-lg col-md col",
                                                style: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.MxGenAIConnector.Snippet_Configuration.actionButton1$visibility",
                                                      $widgetId: "p.MxGenAIConnector.Snippet_Configuration.actionButton1$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.MxGenAIConnector.Snippet_Configuration.actionButton1",
                                                            $widgetId: "p.MxGenAIConnector.Snippet_Configuration.actionButton1",
                                                            buttonId: "p.MxGenAIConnector.Snippet_Configuration.actionButton1",
                                                            class: "mx-name-actionButton1 spacing-outer-right",
                                                            style: void 0,
                                                            tabIndex: void 0,
                                                            renderType: "button",
                                                            role: void 0,
                                                            buttonClass: "btn-primary",
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Import key" }, "args": {} }
                                                              })
                                                            ]),
                                                            tooltip: TextProperty({
                                                              "value": selectTranslation([
                                                                ""
                                                              ])
                                                            }),
                                                            icon: void 0,
                                                            action: ActionProperty({
                                                              "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "1pITVbI2klyyMuchgsfN9g", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                      key: "p.MxGenAIConnector.Snippet_Configuration.actionButton3$visibility",
                                                      $widgetId: "p.MxGenAIConnector.Snippet_Configuration.actionButton3$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.MxGenAIConnector.Snippet_Configuration.actionButton3",
                                                            $widgetId: "p.MxGenAIConnector.Snippet_Configuration.actionButton3",
                                                            buttonId: "p.MxGenAIConnector.Snippet_Configuration.actionButton3",
                                                            class: "mx-name-actionButton3",
                                                            style: void 0,
                                                            tabIndex: void 0,
                                                            renderType: "button",
                                                            role: void 0,
                                                            buttonClass: "btn-default",
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Create key" }, "args": {} }
                                                              })
                                                            ]),
                                                            tooltip: TextProperty({
                                                              "value": selectTranslation([
                                                                ""
                                                              ])
                                                            }),
                                                            icon: void 0,
                                                            action: ActionProperty({
                                                              "action": { "type": "openPage", "argMap": {}, "config": { "name": "MxGenAIConnector/CreateNewKey.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row1",
                                          $widgetId: "p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row1",
                                          class: "row",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row1$column0",
                                                $widgetId: "p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row1$column0",
                                                class: "col-lg col-md-12 col-12",
                                                style: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $TabContainer,
                                                    {
                                                      key: "p.MxGenAIConnector.Snippet_Configuration.tabContainer1",
                                                      $widgetId: "p.MxGenAIConnector.Snippet_Configuration.tabContainer1",
                                                      class: "mx-name-tabContainer1 tab-lined spacing-outer-top-medium",
                                                      style: void 0,
                                                      tabIndex: void 0,
                                                      widgetId: "p.MxGenAIConnector.Snippet_Configuration.tabContainer1",
                                                      defaultTab: 0,
                                                      tabs: [
                                                        {
                                                          "name": "tabPage1",
                                                          "caption": TextProperty({
                                                            "value": selectTranslation([
                                                              "Deployed models"
                                                            ])
                                                          }),
                                                          "isDelayed": false,
                                                          "refreshOnShow": false,
                                                          "content": [
                                                            /* @__PURE__ */ React.createElement(
                                                              $Container,
                                                              {
                                                                key: "p.MxGenAIConnector.Snippet_Configuration.container39",
                                                                $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container39",
                                                                class: "mx-name-container39 grid-deployed-model grid-header",
                                                                style: void 0,
                                                                renderMode: "div",
                                                                onClick: void 0,
                                                                content: [
                                                                  /* @__PURE__ */ React.createElement(
                                                                    $Container,
                                                                    {
                                                                      key: "p.MxGenAIConnector.Snippet_Configuration.container40",
                                                                      $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container40",
                                                                      class: "mx-name-container40",
                                                                      style: void 0,
                                                                      renderMode: "div",
                                                                      onClick: void 0,
                                                                      content: [
                                                                        /* @__PURE__ */ React.createElement(
                                                                          $Text,
                                                                          {
                                                                            key: "p.MxGenAIConnector.Snippet_Configuration.text14",
                                                                            $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text14",
                                                                            class: "mx-name-text14 text-bold",
                                                                            style: void 0,
                                                                            caption: selectTranslation([
                                                                              ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Display name" }, "args": {} }
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
                                                                      key: "p.MxGenAIConnector.Snippet_Configuration.container41",
                                                                      $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container41",
                                                                      class: "mx-name-container41",
                                                                      style: void 0,
                                                                      renderMode: "div",
                                                                      onClick: void 0,
                                                                      content: [
                                                                        /* @__PURE__ */ React.createElement(
                                                                          $Text,
                                                                          {
                                                                            key: "p.MxGenAIConnector.Snippet_Configuration.text16",
                                                                            $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text16",
                                                                            class: "mx-name-text16 text-bold",
                                                                            style: void 0,
                                                                            caption: selectTranslation([
                                                                              ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Key name" }, "args": {} }
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
                                                                      key: "p.MxGenAIConnector.Snippet_Configuration.container42",
                                                                      $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container42",
                                                                      class: "mx-name-container42",
                                                                      style: void 0,
                                                                      renderMode: "div",
                                                                      onClick: void 0,
                                                                      content: [
                                                                        /* @__PURE__ */ React.createElement(
                                                                          $Text,
                                                                          {
                                                                            key: "p.MxGenAIConnector.Snippet_Configuration.text31",
                                                                            $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text31",
                                                                            class: "mx-name-text31 text-bold",
                                                                            style: void 0,
                                                                            caption: selectTranslation([
                                                                              ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Model" }, "args": {} }
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
                                                                      key: "p.MxGenAIConnector.Snippet_Configuration.container43",
                                                                      $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container43",
                                                                      class: "mx-name-container43",
                                                                      style: void 0,
                                                                      renderMode: "div",
                                                                      onClick: void 0,
                                                                      content: [
                                                                        /* @__PURE__ */ React.createElement(
                                                                          $Text,
                                                                          {
                                                                            key: "p.MxGenAIConnector.Snippet_Configuration.text34",
                                                                            $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text34",
                                                                            class: "mx-name-text34 text-bold",
                                                                            style: void 0,
                                                                            caption: selectTranslation([
                                                                              ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Output modality" }, "args": {} }
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
                                                                      key: "p.MxGenAIConnector.Snippet_Configuration.container44",
                                                                      $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container44",
                                                                      class: "mx-name-container44",
                                                                      style: void 0,
                                                                      renderMode: "div",
                                                                      onClick: void 0,
                                                                      content: [
                                                                        /* @__PURE__ */ React.createElement(
                                                                          $Text,
                                                                          {
                                                                            key: "p.MxGenAIConnector.Snippet_Configuration.text32",
                                                                            $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text32",
                                                                            class: "mx-name-text32 text-bold",
                                                                            style: void 0,
                                                                            caption: selectTranslation([
                                                                              ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Environment" }, "args": {} }
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
                                                                      key: "p.MxGenAIConnector.Snippet_Configuration.container45",
                                                                      $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container45",
                                                                      class: "mx-name-container45",
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
                                                            ),
                                                            /* @__PURE__ */ React.createElement(
                                                              $ListView,
                                                              {
                                                                key: "p.MxGenAIConnector.Snippet_Configuration.listView5",
                                                                $widgetId: "p.MxGenAIConnector.Snippet_Configuration.listView5",
                                                                class: "mx-name-listView5 listview-lined listview-hover",
                                                                style: void 0,
                                                                listValue: DatabaseObjectListProperty({
                                                                  "dataSourceId": "p.6",
                                                                  "entity": "MxGenAIConnector.MxCloudDeployedModel",
                                                                  "operationId": "B2jVRlirA1ebNmrFx37eNw",
                                                                  "sort": []
                                                                }),
                                                                itemTemplate: TemplatedWidgetProperty({
                                                                  "dataSourceId": "p.6",
                                                                  "editable": false,
                                                                  "children": () => [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $DataView,
                                                                      {
                                                                        key: "p.MxGenAIConnector.Snippet_Configuration.dataView2",
                                                                        $widgetId: "p.MxGenAIConnector.Snippet_Configuration.dataView2",
                                                                        class: "mx-name-dataView2 form-vertical",
                                                                        style: void 0,
                                                                        tabIndex: void 0,
                                                                        object: AssociationObjectProperty({
                                                                          "dataSourceId": "p.73",
                                                                          "scope": "p.MxGenAIConnector.Snippet_Configuration.listView5",
                                                                          "editable": true,
                                                                          "path": "MxGenAIConnector.MxCloudDeployedModel_Configuration/MxGenAIConnector.Configuration",
                                                                          "operationId": "KrZ8cbYvtFquf8ZPfiGabQ"
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
                                                                              key: "p.MxGenAIConnector.Snippet_Configuration.container31",
                                                                              $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container31",
                                                                              class: "mx-name-container31 grid-deployed-model",
                                                                              style: void 0,
                                                                              renderMode: "div",
                                                                              onClick: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Container,
                                                                                  {
                                                                                    key: "p.MxGenAIConnector.Snippet_Configuration.container32",
                                                                                    $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container32",
                                                                                    class: "mx-name-container32 item",
                                                                                    style: void 0,
                                                                                    renderMode: "div",
                                                                                    onClick: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ConditionalVisibilityWrapper,
                                                                                        {
                                                                                          key: "p.MxGenAIConnector.Snippet_Configuration.actionButton22$visibility",
                                                                                          $widgetId: "p.MxGenAIConnector.Snippet_Configuration.actionButton22$visibility",
                                                                                          visible: ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DeepLinkURL" }] }, { "type": "literal", "value": "" }] }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView2", "source": "object" } } }
                                                                                          }),
                                                                                          contents: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $ActionButton,
                                                                                              {
                                                                                                key: "p.MxGenAIConnector.Snippet_Configuration.actionButton22",
                                                                                                $widgetId: "p.MxGenAIConnector.Snippet_Configuration.actionButton22",
                                                                                                buttonId: "p.MxGenAIConnector.Snippet_Configuration.actionButton22",
                                                                                                class: "mx-name-actionButton22",
                                                                                                style: void 0,
                                                                                                tabIndex: void 0,
                                                                                                renderType: "link",
                                                                                                role: "button",
                                                                                                buttonClass: "btn-default",
                                                                                                caption: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "variable", "variable": "listView5", "path": "DisplayName" }, "args": { "listView5": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView5", "source": "object" } } }
                                                                                                  })
                                                                                                ]),
                                                                                                tooltip: TextProperty({
                                                                                                  "value": selectTranslation([
                                                                                                    ""
                                                                                                  ])
                                                                                                }),
                                                                                                icon: void 0,
                                                                                                action: ActionProperty({
                                                                                                  "action": { "type": "openLink", "argMap": { "$object": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView2", "source": "object" } }, "config": { "schema": "web", "addressAttribute": "MxGenAIConnector.Configuration/DeepLinkURL" }, "disabledDuringExecution": true },
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
                                                                                          key: "p.MxGenAIConnector.Snippet_Configuration.text26$visibility",
                                                                                          $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text26$visibility",
                                                                                          visible: ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DeepLinkURL" }] }, { "type": "literal", "value": "" }] }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView2", "source": "object" } } }
                                                                                          }),
                                                                                          contents: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Text,
                                                                                              {
                                                                                                key: "p.MxGenAIConnector.Snippet_Configuration.text26",
                                                                                                $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text26",
                                                                                                class: "mx-name-text26",
                                                                                                style: void 0,
                                                                                                caption: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "variable", "variable": "listView5", "path": "DisplayName" }, "args": { "listView5": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView5", "source": "object" } } }
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
                                                                                    key: "p.MxGenAIConnector.Snippet_Configuration.container33",
                                                                                    $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container33",
                                                                                    class: "mx-name-container33 item",
                                                                                    style: void 0,
                                                                                    renderMode: "div",
                                                                                    onClick: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Text,
                                                                                        {
                                                                                          key: "p.MxGenAIConnector.Snippet_Configuration.text27",
                                                                                          $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text27",
                                                                                          class: "mx-name-text27",
                                                                                          style: void 0,
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeyName" }] }, { "type": "literal", "value": "" }] }, "then": { "type": "variable", "variable": "currentObject", "path": "KeyName" }, "else": { "type": "literal", "value": "N/A" } }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView2", "source": "object" } } }
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
                                                                                    key: "p.MxGenAIConnector.Snippet_Configuration.container34",
                                                                                    $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container34",
                                                                                    class: "mx-name-container34 item",
                                                                                    style: void 0,
                                                                                    renderMode: "div",
                                                                                    onClick: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Text,
                                                                                        {
                                                                                          key: "p.MxGenAIConnector.Snippet_Configuration.text28",
                                                                                          $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text28",
                                                                                          class: "mx-name-text28",
                                                                                          style: void 0,
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "variable", "variable": "listView5", "path": "Model" }, "args": { "listView5": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView5", "source": "object" } } }
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
                                                                                    key: "p.MxGenAIConnector.Snippet_Configuration.container35",
                                                                                    $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container35",
                                                                                    class: "mx-name-container35 item",
                                                                                    style: void 0,
                                                                                    renderMode: "div",
                                                                                    onClick: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Text,
                                                                                        {
                                                                                          key: "p.MxGenAIConnector.Snippet_Configuration.text29",
                                                                                          $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text29",
                                                                                          class: "mx-name-text29",
                                                                                          style: void 0,
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "listView5", "path": "OutputModality" }, { "type": "literal", "value": "GenAICommons.ENUM_ModelModality" }] }, "args": { "listView5": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView5", "source": "object" } } }
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
                                                                                    key: "p.MxGenAIConnector.Snippet_Configuration.container36",
                                                                                    $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container36",
                                                                                    class: "mx-name-container36 item",
                                                                                    style: void 0,
                                                                                    renderMode: "div",
                                                                                    onClick: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Text,
                                                                                        {
                                                                                          key: "p.MxGenAIConnector.Snippet_Configuration.text30",
                                                                                          $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text30",
                                                                                          class: "mx-name-text30",
                                                                                          style: void 0,
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Environment" }] }, { "type": "literal", "value": "" }] }, "then": { "type": "variable", "variable": "currentObject", "path": "Environment" }, "else": { "type": "literal", "value": "N/A" } }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView2", "source": "object" } } }
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
                                                                                    key: "p.MxGenAIConnector.Snippet_Configuration.container37",
                                                                                    $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container37",
                                                                                    class: "mx-name-container37",
                                                                                    style: void 0,
                                                                                    renderMode: "div",
                                                                                    onClick: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Container,
                                                                                        {
                                                                                          key: "p.MxGenAIConnector.Snippet_Configuration.container38",
                                                                                          $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container38",
                                                                                          class: "mx-name-container38 row-right",
                                                                                          style: void 0,
                                                                                          renderMode: "div",
                                                                                          onClick: void 0,
                                                                                          content: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $ConditionalVisibilityWrapper,
                                                                                              {
                                                                                                key: "p.MxGenAIConnector.Snippet_Configuration.actionButton23$visibility",
                                                                                                $widgetId: "p.MxGenAIConnector.Snippet_Configuration.actionButton23$visibility",
                                                                                                visible: ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                                                }),
                                                                                                contents: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $ActionButton,
                                                                                                    {
                                                                                                      key: "p.MxGenAIConnector.Snippet_Configuration.actionButton23",
                                                                                                      $widgetId: "p.MxGenAIConnector.Snippet_Configuration.actionButton23",
                                                                                                      buttonId: "p.MxGenAIConnector.Snippet_Configuration.actionButton23",
                                                                                                      class: "mx-name-actionButton23",
                                                                                                      style: {
                                                                                                        "marginRight": "8px"
                                                                                                      },
                                                                                                      tabIndex: void 0,
                                                                                                      renderType: "link",
                                                                                                      role: "button",
                                                                                                      buttonClass: "btn-default",
                                                                                                      caption: selectTranslation([
                                                                                                        ExpressionProperty({
                                                                                                          "expression": { "expr": { "type": "literal", "value": "Test Key" }, "args": {} }
                                                                                                        })
                                                                                                      ]),
                                                                                                      tooltip: TextProperty({
                                                                                                        "value": selectTranslation([
                                                                                                          "Test Key"
                                                                                                        ])
                                                                                                      }),
                                                                                                      icon: void 0,
                                                                                                      action: ActionProperty({
                                                                                                        "action": { "type": "callMicroflow", "argMap": { "MxCloudDeployedModel": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView5", "source": "object" } }, "config": { "operationId": "mg+7xFnsll2z2FGasG+9VQ", "progress": { "message": selectTranslation([""]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                                key: "p.MxGenAIConnector.Snippet_Configuration.actionButton24$visibility",
                                                                                                $widgetId: "p.MxGenAIConnector.Snippet_Configuration.actionButton24$visibility",
                                                                                                visible: ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                                                }),
                                                                                                contents: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $ActionButton,
                                                                                                    {
                                                                                                      key: "p.MxGenAIConnector.Snippet_Configuration.actionButton24",
                                                                                                      $widgetId: "p.MxGenAIConnector.Snippet_Configuration.actionButton24",
                                                                                                      buttonId: "p.MxGenAIConnector.Snippet_Configuration.actionButton24",
                                                                                                      class: "mx-name-actionButton24",
                                                                                                      style: {
                                                                                                        "color": "#b6323e"
                                                                                                      },
                                                                                                      tabIndex: void 0,
                                                                                                      renderType: "link",
                                                                                                      role: "button",
                                                                                                      buttonClass: "btn-default",
                                                                                                      caption: selectTranslation([
                                                                                                        ExpressionProperty({
                                                                                                          "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                                                                                                        })
                                                                                                      ]),
                                                                                                      tooltip: TextProperty({
                                                                                                        "value": selectTranslation([
                                                                                                          "Delete Configuration"
                                                                                                        ])
                                                                                                      }),
                                                                                                      icon: WebIconProperty({
                                                                                                        "icon": { "type": "glyph", "iconClass": "glyphicon-trash" }
                                                                                                      }),
                                                                                                      action: ActionProperty({
                                                                                                        "action": { "type": "callMicroflow", "argMap": { "MxCloudDeployedModel": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView5", "source": "object" } }, "config": { "operationId": "oRYcj9H9LFuXrbbQmEC9aQ", "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure?"]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                        hideFooter: false,
                                                                        footer: void 0
                                                                      }
                                                                    )
                                                                  ]
                                                                }),
                                                                onClick: void 0,
                                                                pageSize: 5
                                                              }
                                                            )
                                                          ]
                                                        },
                                                        {
                                                          "name": "tabPage3",
                                                          "caption": TextProperty({
                                                            "value": selectTranslation([
                                                              "Knowledge bases"
                                                            ])
                                                          }),
                                                          "isDelayed": true,
                                                          "refreshOnShow": false,
                                                          "content": [
                                                            /* @__PURE__ */ React.createElement(
                                                              $Div,
                                                              {
                                                                key: "p.MxGenAIConnector.Snippet_Configuration.layoutGrid2",
                                                                $widgetId: "p.MxGenAIConnector.Snippet_Configuration.layoutGrid2",
                                                                class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                                style: void 0,
                                                                content: [
                                                                  /* @__PURE__ */ React.createElement(
                                                                    $Div,
                                                                    {
                                                                      key: "p.MxGenAIConnector.Configuration_Overview.layoutGrid2$row0",
                                                                      $widgetId: "p.MxGenAIConnector.Configuration_Overview.layoutGrid2$row0",
                                                                      class: "row",
                                                                      style: void 0,
                                                                      content: [
                                                                        /* @__PURE__ */ React.createElement(
                                                                          $Div,
                                                                          {
                                                                            key: "p.MxGenAIConnector.Configuration_Overview.layoutGrid2$row0$column0",
                                                                            $widgetId: "p.MxGenAIConnector.Configuration_Overview.layoutGrid2$row0$column0",
                                                                            class: "col-lg col-md col",
                                                                            style: void 0,
                                                                            content: [
                                                                              /* @__PURE__ */ React.createElement(
                                                                                $Container,
                                                                                {
                                                                                  key: "p.MxGenAIConnector.Snippet_Configuration.container11",
                                                                                  $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container11",
                                                                                  class: "mx-name-container11 grid-knowledge-bases grid-header",
                                                                                  style: void 0,
                                                                                  renderMode: "div",
                                                                                  onClick: void 0,
                                                                                  content: [
                                                                                    /* @__PURE__ */ React.createElement(
                                                                                      $Container,
                                                                                      {
                                                                                        key: "p.MxGenAIConnector.Snippet_Configuration.container12",
                                                                                        $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container12",
                                                                                        class: "mx-name-container12 spacing-outer-right-medium",
                                                                                        style: void 0,
                                                                                        renderMode: "div",
                                                                                        onClick: void 0,
                                                                                        content: [
                                                                                          /* @__PURE__ */ React.createElement(
                                                                                            $Text,
                                                                                            {
                                                                                              key: "p.MxGenAIConnector.Snippet_Configuration.text3",
                                                                                              $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text3",
                                                                                              class: "mx-name-text3 text-bold",
                                                                                              style: void 0,
                                                                                              caption: selectTranslation([
                                                                                                ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "literal", "value": "Display name" }, "args": {} }
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
                                                                                        key: "p.MxGenAIConnector.Snippet_Configuration.container13",
                                                                                        $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container13",
                                                                                        class: "mx-name-container13",
                                                                                        style: void 0,
                                                                                        renderMode: "div",
                                                                                        onClick: void 0,
                                                                                        content: [
                                                                                          /* @__PURE__ */ React.createElement(
                                                                                            $Text,
                                                                                            {
                                                                                              key: "p.MxGenAIConnector.Snippet_Configuration.text6",
                                                                                              $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text6",
                                                                                              class: "mx-name-text6 text-bold",
                                                                                              style: void 0,
                                                                                              caption: selectTranslation([
                                                                                                ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "literal", "value": "Key name" }, "args": {} }
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
                                                                                        key: "p.MxGenAIConnector.Snippet_Configuration.container14",
                                                                                        $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container14",
                                                                                        class: "mx-name-container14 spacing-outer-right-medium",
                                                                                        style: void 0,
                                                                                        renderMode: "div",
                                                                                        onClick: void 0,
                                                                                        content: [
                                                                                          /* @__PURE__ */ React.createElement(
                                                                                            $Text,
                                                                                            {
                                                                                              key: "p.MxGenAIConnector.Snippet_Configuration.text4",
                                                                                              $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text4",
                                                                                              class: "mx-name-text4 text-bold",
                                                                                              style: void 0,
                                                                                              caption: selectTranslation([
                                                                                                ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "literal", "value": "Embeddings generation resource" }, "args": {} }
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
                                                                                        key: "p.MxGenAIConnector.Snippet_Configuration.container15",
                                                                                        $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container15",
                                                                                        class: "mx-name-container15",
                                                                                        style: void 0,
                                                                                        renderMode: "div",
                                                                                        onClick: void 0,
                                                                                        content: [
                                                                                          /* @__PURE__ */ React.createElement(
                                                                                            $Text,
                                                                                            {
                                                                                              key: "p.MxGenAIConnector.Snippet_Configuration.text5",
                                                                                              $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text5",
                                                                                              class: "mx-name-text5 text-bold",
                                                                                              style: void 0,
                                                                                              caption: selectTranslation([
                                                                                                ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "literal", "value": "Environment" }, "args": {} }
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
                                                                                        key: "p.MxGenAIConnector.Snippet_Configuration.container16",
                                                                                        $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container16",
                                                                                        class: "mx-name-container16",
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
                                                                              ),
                                                                              /* @__PURE__ */ React.createElement(
                                                                                $ListView,
                                                                                {
                                                                                  key: "p.MxGenAIConnector.Snippet_Configuration.listView3",
                                                                                  $widgetId: "p.MxGenAIConnector.Snippet_Configuration.listView3",
                                                                                  class: "mx-name-listView3 listview-lined listview-hover",
                                                                                  style: void 0,
                                                                                  listValue: DatabaseObjectListProperty({
                                                                                    "dataSourceId": "p.13",
                                                                                    "entity": "MxGenAIConnector.MxCloudKnowledgeBaseResource",
                                                                                    "operationId": "eBw93mJ43FKZwbjdBlU/Vg",
                                                                                    "sort": []
                                                                                  }),
                                                                                  itemTemplate: TemplatedWidgetProperty({
                                                                                    "dataSourceId": "p.13",
                                                                                    "editable": false,
                                                                                    "children": () => [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $DataView,
                                                                                        {
                                                                                          key: "p.MxGenAIConnector.Snippet_Configuration.dataView3",
                                                                                          $widgetId: "p.MxGenAIConnector.Snippet_Configuration.dataView3",
                                                                                          class: "mx-name-dataView3 form-vertical",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0,
                                                                                          object: AssociationObjectProperty({
                                                                                            "dataSourceId": "p.134",
                                                                                            "scope": "p.MxGenAIConnector.Snippet_Configuration.listView3",
                                                                                            "editable": true,
                                                                                            "path": "MxGenAIConnector.MxCloudKnowledgeBaseResource_Configuration/MxGenAIConnector.Configuration",
                                                                                            "operationId": "3MgR6r7/ll6Q4J8idyrZgQ"
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
                                                                                                key: "p.MxGenAIConnector.Snippet_Configuration.container2",
                                                                                                $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container2",
                                                                                                class: "mx-name-container2 grid-knowledge-bases",
                                                                                                style: void 0,
                                                                                                renderMode: "div",
                                                                                                onClick: void 0,
                                                                                                content: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.MxGenAIConnector.Snippet_Configuration.container3",
                                                                                                      $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container3",
                                                                                                      class: "mx-name-container3 item spacing-outer-right-medium",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $ConditionalVisibilityWrapper,
                                                                                                          {
                                                                                                            key: "p.MxGenAIConnector.Snippet_Configuration.actionButton15$visibility",
                                                                                                            $widgetId: "p.MxGenAIConnector.Snippet_Configuration.actionButton15$visibility",
                                                                                                            visible: ExpressionProperty({
                                                                                                              "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DeepLinkURL" }] }, { "type": "literal", "value": "" }] }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView3", "source": "object" } } }
                                                                                                            }),
                                                                                                            contents: [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $ActionButton,
                                                                                                                {
                                                                                                                  key: "p.MxGenAIConnector.Snippet_Configuration.actionButton15",
                                                                                                                  $widgetId: "p.MxGenAIConnector.Snippet_Configuration.actionButton15",
                                                                                                                  buttonId: "p.MxGenAIConnector.Snippet_Configuration.actionButton15",
                                                                                                                  class: "mx-name-actionButton15",
                                                                                                                  style: void 0,
                                                                                                                  tabIndex: void 0,
                                                                                                                  renderType: "link",
                                                                                                                  role: "button",
                                                                                                                  buttonClass: "btn-default",
                                                                                                                  caption: selectTranslation([
                                                                                                                    ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "variable", "variable": "listView3", "path": "DisplayName" }, "args": { "listView3": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView3", "source": "object" } } }
                                                                                                                    })
                                                                                                                  ]),
                                                                                                                  tooltip: TextProperty({
                                                                                                                    "value": selectTranslation([
                                                                                                                      ""
                                                                                                                    ])
                                                                                                                  }),
                                                                                                                  icon: void 0,
                                                                                                                  action: ActionProperty({
                                                                                                                    "action": { "type": "openLink", "argMap": { "$object": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView3", "source": "object" } }, "config": { "schema": "web", "addressAttribute": "MxGenAIConnector.Configuration/DeepLinkURL" }, "disabledDuringExecution": true },
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
                                                                                                            key: "p.MxGenAIConnector.Snippet_Configuration.text15$visibility",
                                                                                                            $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text15$visibility",
                                                                                                            visible: ExpressionProperty({
                                                                                                              "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DeepLinkURL" }] }, { "type": "literal", "value": "" }] }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView3", "source": "object" } } }
                                                                                                            }),
                                                                                                            contents: [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $Text,
                                                                                                                {
                                                                                                                  key: "p.MxGenAIConnector.Snippet_Configuration.text15",
                                                                                                                  $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text15",
                                                                                                                  class: "mx-name-text15",
                                                                                                                  style: void 0,
                                                                                                                  caption: selectTranslation([
                                                                                                                    ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "variable", "variable": "listView3", "path": "DisplayName" }, "args": { "listView3": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView3", "source": "object" } } }
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
                                                                                                      key: "p.MxGenAIConnector.Snippet_Configuration.container7",
                                                                                                      $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container7",
                                                                                                      class: "mx-name-container7 item",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.MxGenAIConnector.Snippet_Configuration.text33",
                                                                                                            $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text33",
                                                                                                            class: "mx-name-text33",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeyName" }] }, { "type": "literal", "value": "" }] }, "then": { "type": "variable", "variable": "currentObject", "path": "KeyName" }, "else": { "type": "literal", "value": "N/A" } }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView3", "source": "object" } } }
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
                                                                                                      key: "p.MxGenAIConnector.Snippet_Configuration.container8",
                                                                                                      $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container8",
                                                                                                      class: "mx-name-container8 item spacing-outer-right-medium",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.MxGenAIConnector.Snippet_Configuration.text8",
                                                                                                            $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text8",
                                                                                                            class: "mx-name-text8",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "variable", "variable": "listView3", "path": "MxGenAIConnector.MxCloudKnowledgeBaseResource_MxCloudDeployedModel/MxGenAIConnector.MxCloudDeployedModel/DisplayName" }, "args": { "listView3": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView3", "source": "object" } } }
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
                                                                                                      key: "p.MxGenAIConnector.Snippet_Configuration.container9",
                                                                                                      $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container9",
                                                                                                      class: "mx-name-container9 item",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.MxGenAIConnector.Snippet_Configuration.text35",
                                                                                                            $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text35",
                                                                                                            class: "mx-name-text35",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Environment" }] }, { "type": "literal", "value": "" }] }, "then": { "type": "variable", "variable": "currentObject", "path": "Environment" }, "else": { "type": "literal", "value": "N/A" } }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView3", "source": "object" } } }
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
                                                                                                      key: "p.MxGenAIConnector.Snippet_Configuration.container10",
                                                                                                      $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container10",
                                                                                                      class: "mx-name-container10",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Container,
                                                                                                          {
                                                                                                            key: "p.MxGenAIConnector.Snippet_Configuration.container6",
                                                                                                            $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container6",
                                                                                                            class: "mx-name-container6 row-right",
                                                                                                            style: void 0,
                                                                                                            renderMode: "div",
                                                                                                            onClick: void 0,
                                                                                                            content: [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $ConditionalVisibilityWrapper,
                                                                                                                {
                                                                                                                  key: "p.MxGenAIConnector.Snippet_Configuration.actionButton20$visibility",
                                                                                                                  $widgetId: "p.MxGenAIConnector.Snippet_Configuration.actionButton20$visibility",
                                                                                                                  visible: ExpressionProperty({
                                                                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                                                                  }),
                                                                                                                  contents: [
                                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                                      $ActionButton,
                                                                                                                      {
                                                                                                                        key: "p.MxGenAIConnector.Snippet_Configuration.actionButton20",
                                                                                                                        $widgetId: "p.MxGenAIConnector.Snippet_Configuration.actionButton20",
                                                                                                                        buttonId: "p.MxGenAIConnector.Snippet_Configuration.actionButton20",
                                                                                                                        class: "mx-name-actionButton20",
                                                                                                                        style: {
                                                                                                                          "marginRight": "8px"
                                                                                                                        },
                                                                                                                        tabIndex: void 0,
                                                                                                                        renderType: "link",
                                                                                                                        role: "button",
                                                                                                                        buttonClass: "btn-default",
                                                                                                                        caption: selectTranslation([
                                                                                                                          ExpressionProperty({
                                                                                                                            "expression": { "expr": { "type": "literal", "value": "Test Key" }, "args": {} }
                                                                                                                          })
                                                                                                                        ]),
                                                                                                                        tooltip: TextProperty({
                                                                                                                          "value": selectTranslation([
                                                                                                                            "Test Key"
                                                                                                                          ])
                                                                                                                        }),
                                                                                                                        icon: void 0,
                                                                                                                        action: ActionProperty({
                                                                                                                          "action": { "type": "callMicroflow", "argMap": { "MxCloudKnowledgeBaseResource": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView3", "source": "object" } }, "config": { "operationId": "GMgd1dQ/2li4AyeGFJ+y2A", "progress": { "message": selectTranslation([""]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                                                  key: "p.MxGenAIConnector.Snippet_Configuration.actionButton26$visibility",
                                                                                                                  $widgetId: "p.MxGenAIConnector.Snippet_Configuration.actionButton26$visibility",
                                                                                                                  visible: ExpressionProperty({
                                                                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                                                                  }),
                                                                                                                  contents: [
                                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                                      $ActionButton,
                                                                                                                      {
                                                                                                                        key: "p.MxGenAIConnector.Snippet_Configuration.actionButton26",
                                                                                                                        $widgetId: "p.MxGenAIConnector.Snippet_Configuration.actionButton26",
                                                                                                                        buttonId: "p.MxGenAIConnector.Snippet_Configuration.actionButton26",
                                                                                                                        class: "mx-name-actionButton26",
                                                                                                                        style: {
                                                                                                                          "color": "#b6323e"
                                                                                                                        },
                                                                                                                        tabIndex: void 0,
                                                                                                                        renderType: "link",
                                                                                                                        role: "button",
                                                                                                                        buttonClass: "btn-default",
                                                                                                                        caption: selectTranslation([
                                                                                                                          ExpressionProperty({
                                                                                                                            "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                                                                                                                          })
                                                                                                                        ]),
                                                                                                                        tooltip: TextProperty({
                                                                                                                          "value": selectTranslation([
                                                                                                                            "Delete Configuration"
                                                                                                                          ])
                                                                                                                        }),
                                                                                                                        icon: WebIconProperty({
                                                                                                                          "icon": { "type": "glyph", "iconClass": "glyphicon-trash" }
                                                                                                                        }),
                                                                                                                        action: ActionProperty({
                                                                                                                          "action": { "type": "callMicroflow", "argMap": { "MxCloudKnowledgeBaseResource": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView3", "source": "object" } }, "config": { "operationId": "nv9m709YqleMU8RMR1UBpQ", "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure?"]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                          hideFooter: false,
                                                                                          footer: void 0
                                                                                        }
                                                                                      )
                                                                                    ]
                                                                                  }),
                                                                                  onClick: void 0,
                                                                                  pageSize: 5,
                                                                                  selection: WidgetVariableProperty({
                                                                                    "slot": "selection",
                                                                                    "type": "ObjectReferenceSet"
                                                                                  })
                                                                                }
                                                                              )
                                                                            ]
                                                                          }
                                                                        ),
                                                                        /* @__PURE__ */ React.createElement(
                                                                          $Div,
                                                                          {
                                                                            key: "p.MxGenAIConnector.Configuration_Overview.layoutGrid2$row0$column1",
                                                                            $widgetId: "p.MxGenAIConnector.Configuration_Overview.layoutGrid2$row0$column1",
                                                                            class: "col-lg-4 col-md col",
                                                                            style: void 0,
                                                                            content: [
                                                                              /* @__PURE__ */ React.createElement(
                                                                                $DataView,
                                                                                {
                                                                                  key: "p.MxGenAIConnector.Snippet_Configuration.dataView1",
                                                                                  $widgetId: "p.MxGenAIConnector.Snippet_Configuration.dataView1",
                                                                                  class: "mx-name-dataView1 form-horizontal",
                                                                                  style: void 0,
                                                                                  tabIndex: void 0,
                                                                                  object: ListenObjectProperty({
                                                                                    "dataSourceId": "p.165",
                                                                                    "editable": true,
                                                                                    "listenTo": "p.MxGenAIConnector.Snippet_Configuration.listView3",
                                                                                    "operationId": "lH2afGoxBVuyEP4ZW9HUXA"
                                                                                  }),
                                                                                  emptyMessage: TextProperty({
                                                                                    "value": selectTranslation([
                                                                                      " "
                                                                                    ])
                                                                                  }),
                                                                                  body: [
                                                                                    /* @__PURE__ */ React.createElement(
                                                                                      $ConditionalVisibilityWrapper,
                                                                                      {
                                                                                        key: "p.MxGenAIConnector.Snippet_Configuration.container4$visibility",
                                                                                        $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container4$visibility",
                                                                                        visible: ExpressionProperty({
                                                                                          "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView1", "source": "object" } } }
                                                                                        }),
                                                                                        contents: [
                                                                                          /* @__PURE__ */ React.createElement(
                                                                                            $Container,
                                                                                            {
                                                                                              key: "p.MxGenAIConnector.Snippet_Configuration.container4",
                                                                                              $widgetId: "p.MxGenAIConnector.Snippet_Configuration.container4",
                                                                                              class: "mx-name-container4",
                                                                                              style: void 0,
                                                                                              renderMode: "div",
                                                                                              onClick: void 0,
                                                                                              content: [
                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                  $Div,
                                                                                                  {
                                                                                                    key: "p.MxGenAIConnector.Snippet_Configuration.layoutGrid3",
                                                                                                    $widgetId: "p.MxGenAIConnector.Snippet_Configuration.layoutGrid3",
                                                                                                    class: "mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid",
                                                                                                    style: void 0,
                                                                                                    content: [
                                                                                                      /* @__PURE__ */ React.createElement(
                                                                                                        $Div,
                                                                                                        {
                                                                                                          key: "p.MxGenAIConnector.Configuration_Overview.layoutGrid3$row0",
                                                                                                          $widgetId: "p.MxGenAIConnector.Configuration_Overview.layoutGrid3$row0",
                                                                                                          class: "row",
                                                                                                          style: void 0,
                                                                                                          content: [
                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                              $Div,
                                                                                                              {
                                                                                                                key: "p.MxGenAIConnector.Configuration_Overview.layoutGrid3$row0$column0",
                                                                                                                $widgetId: "p.MxGenAIConnector.Configuration_Overview.layoutGrid3$row0$column0",
                                                                                                                class: "col-lg col-md col",
                                                                                                                style: void 0,
                                                                                                                content: [
                                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                                    $Text,
                                                                                                                    {
                                                                                                                      key: "p.MxGenAIConnector.Snippet_Configuration.text1",
                                                                                                                      $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text1",
                                                                                                                      class: "mx-name-text1 spacing-outer-left-medium",
                                                                                                                      style: void 0,
                                                                                                                      caption: selectTranslation([
                                                                                                                        ExpressionProperty({
                                                                                                                          "expression": { "expr": { "type": "literal", "value": "Collections" }, "args": {} }
                                                                                                                        })
                                                                                                                      ]),
                                                                                                                      renderMode: "h5"
                                                                                                                    }
                                                                                                                  )
                                                                                                                ]
                                                                                                              }
                                                                                                            ),
                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                              $Div,
                                                                                                              {
                                                                                                                key: "p.MxGenAIConnector.Configuration_Overview.layoutGrid3$row0$column1",
                                                                                                                $widgetId: "p.MxGenAIConnector.Configuration_Overview.layoutGrid3$row0$column1",
                                                                                                                class: "col-lg-auto col-md col",
                                                                                                                style: void 0,
                                                                                                                content: [
                                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                                    $ConditionalVisibilityWrapper,
                                                                                                                    {
                                                                                                                      key: "p.MxGenAIConnector.Snippet_Configuration.actionButton2$visibility",
                                                                                                                      $widgetId: "p.MxGenAIConnector.Snippet_Configuration.actionButton2$visibility",
                                                                                                                      visible: ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                                                                      }),
                                                                                                                      contents: [
                                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                                          $ActionButton,
                                                                                                                          {
                                                                                                                            key: "p.MxGenAIConnector.Snippet_Configuration.actionButton2",
                                                                                                                            $widgetId: "p.MxGenAIConnector.Snippet_Configuration.actionButton2",
                                                                                                                            buttonId: "p.MxGenAIConnector.Snippet_Configuration.actionButton2",
                                                                                                                            class: "mx-name-actionButton2 pull-right",
                                                                                                                            style: void 0,
                                                                                                                            tabIndex: void 0,
                                                                                                                            renderType: "link",
                                                                                                                            role: "button",
                                                                                                                            buttonClass: "btn-default",
                                                                                                                            caption: selectTranslation([
                                                                                                                              ExpressionProperty({
                                                                                                                                "expression": { "expr": { "type": "literal", "value": "Update" }, "args": {} }
                                                                                                                              })
                                                                                                                            ]),
                                                                                                                            tooltip: TextProperty({
                                                                                                                              "value": selectTranslation([
                                                                                                                                ""
                                                                                                                              ])
                                                                                                                            }),
                                                                                                                            icon: WebIconProperty({
                                                                                                                              "icon": { "type": "glyph", "iconClass": "glyphicon-refresh" }
                                                                                                                            }),
                                                                                                                            action: ActionProperty({
                                                                                                                              "action": { "type": "callMicroflow", "argMap": { "MxCloudKnowledgeBaseResource": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView1", "source": "object" } }, "config": { "operationId": "XnwMd/PTW1ymUh97/nPa+w", "progress": { "message": selectTranslation(["Synchronizing.."]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                                                ),
                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                  $ListView,
                                                                                                  {
                                                                                                    key: "p.MxGenAIConnector.Snippet_Configuration.listView1",
                                                                                                    $widgetId: "p.MxGenAIConnector.Snippet_Configuration.listView1",
                                                                                                    class: "mx-name-listView1 spacing-outer-top-medium",
                                                                                                    style: void 0,
                                                                                                    listValue: DatabaseObjectListProperty({
                                                                                                      "dataSourceId": "p.22",
                                                                                                      "entity": "MxGenAIConnector.Collection",
                                                                                                      "scope": "p.MxGenAIConnector.Snippet_Configuration.dataView1",
                                                                                                      "operationId": "5PUj11ObP1KvYTFzftn1Mw",
                                                                                                      "sort": [
                                                                                                        [
                                                                                                          "Name",
                                                                                                          "asc"
                                                                                                        ]
                                                                                                      ],
                                                                                                      "arguments": {
                                                                                                        "currentObject": [
                                                                                                          "p.MxGenAIConnector.Snippet_Configuration.dataView1"
                                                                                                        ],
                                                                                                        "CurrentObject": [
                                                                                                          "p.MxGenAIConnector.Snippet_Configuration.dataView1"
                                                                                                        ]
                                                                                                      },
                                                                                                      "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "MxGenAIConnector.Collection_MxCloudKnowledgeBaseResource", "context": "MxGenAIConnector.Collection", "attributeType": "ObjectReference" }, { "type": "variable", "name": "currentObject" }] }
                                                                                                    }),
                                                                                                    itemTemplate: TemplatedWidgetProperty({
                                                                                                      "dataSourceId": "p.22",
                                                                                                      "editable": false,
                                                                                                      "children": () => [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.MxGenAIConnector.Snippet_Configuration.text2",
                                                                                                            $widgetId: "p.MxGenAIConnector.Snippet_Configuration.text2",
                                                                                                            class: "mx-name-text2",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView1", "source": "object" } } }
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
                                                                                              ],
                                                                                              ariaHidden: false
                                                                                            }
                                                                                          )
                                                                                        ]
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
                                                                      ]
                                                                    }
                                                                  )
                                                                ]
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
]);
const title = selectTranslation([
  "GenAI Resources"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
