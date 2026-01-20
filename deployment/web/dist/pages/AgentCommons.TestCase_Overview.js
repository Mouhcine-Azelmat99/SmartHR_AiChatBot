import { reactExports, asPluginWidgets, selectTranslation } from '../index-B-pQLZz2.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C1uYYDJ5.js';
import { ActionButton, ActionProperty } from '../ActionButton-C47bDiwH.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BrlLyOx6.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-Dk1DF3Sc.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-viDAZSOp.js';
import { TextProperty } from '../TextProperty-ukMsrrP8.js';
import { WebIconProperty } from '../WebIconProperty-B4eQIHHv.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C-2xhd5O.js';
import { Container } from '../Container-CTbE-yQS.js';
import { DataView } from '../DataView-DtIsQy7l.js';
import { Div } from '../Div-C2k8MuH7.js';
import { ListView } from '../ListView-CtnOFRNF.js';
import { Text } from '../Text-5NmEA291.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-D5lHkh-a.js';
import '../CkBXggmw-CEa7-Kz-.js';
import '../UeptbR6O-9Cnv5Sxb.js';
import '../uEIG9e6s-CoI72Q4o.js';
import '../bdxqAC6d-ISZWqfJE.js';
import '../InlineText-CcVi-f0x.js';
import '../ScrollContainer-B-pXvHDA.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $Container, $Text, $ListView, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, Container, Text, ListView, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.AgentCommons.TestCase_Overview.layoutGrid1",
      $widgetId: "p.AgentCommons.TestCase_Overview.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AgentCommons.TestCase_Overview.layoutGrid1$row0",
            $widgetId: "p.AgentCommons.TestCase_Overview.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AgentCommons.TestCase_Overview.layoutGrid1$row0$column0",
                  $widgetId: "p.AgentCommons.TestCase_Overview.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.AgentCommons.TestCase_Overview.dataView1",
                        $widgetId: "p.AgentCommons.TestCase_Overview.dataView1",
                        class: "mx-name-dataView1 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.13",
                          "scope": "$Agent",
                          "editable": true
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
                              key: "p.AgentCommons.TestCase_Overview.container43",
                              $widgetId: "p.AgentCommons.TestCase_Overview.container43",
                              class: "mx-name-container43 table-header spacing-outer-top-none",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.TestCase_Overview.text51",
                                    $widgetId: "p.AgentCommons.TestCase_Overview.text51",
                                    class: "mx-name-text51 text-test-case text-semibold",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Test Cases" }, "args": {} }
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
                            $ListView,
                            {
                              key: "p.AgentCommons.TestCase_Overview.listView3",
                              $widgetId: "p.AgentCommons.TestCase_Overview.listView3",
                              class: "mx-name-listView3 listview-stylingless",
                              style: void 0,
                              listValue: DatabaseObjectListProperty({
                                "dataSourceId": "p.0",
                                "entity": "AgentCommons.TestCase",
                                "scope": "p.AgentCommons.TestCase_Overview.dataView1",
                                "operationId": "txxIqqnI1FKbGmDZFm4d7w",
                                "sort": [],
                                "arguments": {
                                  "currentObject": [
                                    "$Agent"
                                  ]
                                },
                                "constraints": { "type": "function", "name": "and", "parameters": [{ "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "AgentCommons.TestCase_Agent", "context": "AgentCommons.TestCase", "attributeType": "ObjectReference" }, { "type": "variable", "name": "currentObject" }] }, { "type": "function", "name": "not", "parameters": [{ "type": "attribute", "attribute": "IsDraftTestCase", "context": "AgentCommons.TestCase", "attributeType": "Boolean" }] }] }
                              }),
                              itemTemplate: TemplatedWidgetProperty({
                                "dataSourceId": "p.0",
                                "editable": false,
                                "children": () => [
                                  /* @__PURE__ */ React.createElement(
                                    $Container,
                                    {
                                      key: "p.AgentCommons.TestCase_Overview.container48",
                                      $widgetId: "p.AgentCommons.TestCase_Overview.container48",
                                      class: "mx-name-container48 testcase-table spacing-outer-top-medium spacing-inner-right-none",
                                      style: void 0,
                                      renderMode: "div",
                                      onClick: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Text,
                                          {
                                            key: "p.AgentCommons.TestCase_Overview.text56",
                                            $widgetId: "p.AgentCommons.TestCase_Overview.text56",
                                            class: "mx-name-text56 text-testcase spacing-inner-left-none",
                                            style: void 0,
                                            caption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.AgentCommons.TestCase_Overview.listView3", "source": "object" } } }
                                              })
                                            ]),
                                            renderMode: "span"
                                          }
                                        ),
                                        /* @__PURE__ */ React.createElement(
                                          $ConditionalVisibilityWrapper,
                                          {
                                            key: "p.AgentCommons.TestCase_Overview.actionButton1$visibility",
                                            $widgetId: "p.AgentCommons.TestCase_Overview.actionButton1$visibility",
                                            visible: ExpressionProperty({
                                              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                            }),
                                            contents: [
                                              /* @__PURE__ */ React.createElement(
                                                $ActionButton,
                                                {
                                                  key: "p.AgentCommons.TestCase_Overview.actionButton1",
                                                  $widgetId: "p.AgentCommons.TestCase_Overview.actionButton1",
                                                  buttonId: "p.AgentCommons.TestCase_Overview.actionButton1",
                                                  class: "mx-name-actionButton1 delete-icon",
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
                                                      "Delete test case"
                                                    ])
                                                  }),
                                                  icon: WebIconProperty({
                                                    "icon": { "type": "glyph", "iconClass": "glyphicon-trash" }
                                                  }),
                                                  action: ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": { "TestCase": { "widget": "p.AgentCommons.TestCase_Overview.listView3", "source": "object" }, "PageHelper": { "widget": "$PageHelper", "source": "object" } }, "config": { "operationId": "KEEBt4Ttu1GyNliawmzwDA", "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure?"]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                              }),
                              onClick: void 0,
                              pageSize: 10
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.AgentCommons.TestCase_Overview.actionButton2",
                              $widgetId: "p.AgentCommons.TestCase_Overview.actionButton2",
                              buttonId: "p.AgentCommons.TestCase_Overview.actionButton2",
                              class: "mx-name-actionButton2 pull-right",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-primary",
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
  "Manage test cases"
]);
const classes = "";
const cancelChangesOperationId = "kh2gh9NhCl2jGNhqI9dIUA";
const closeButton = "p.AgentCommons.TestCase_Overview.actionButton2";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
