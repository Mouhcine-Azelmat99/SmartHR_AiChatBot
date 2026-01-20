import { reactExports, asPluginWidgets, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-ALaVt2gM.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { DataView } from '../DataView-BlzHzMI2.js';
import { Div } from '../Div-DznaFJxI.js';
import { Text } from '../Text-mON8QAZM.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-CdvE1MzX.js';
import '../CkBXggmw-DpOc9R4C.js';
import '../bdxqAC6d-DXeZKQMd.js';
import '../InlineText-D4EmJMFt.js';
import '../ScrollContainer-U0HrQ4Hh.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $Text, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, Text, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.ConversationalUI.Source_View.layoutGrid1",
      $widgetId: "p.ConversationalUI.Source_View.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.ConversationalUI.Source_View.layoutGrid1$row0",
            $widgetId: "p.ConversationalUI.Source_View.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.ConversationalUI.Source_View.layoutGrid1$row0$column0",
                  $widgetId: "p.ConversationalUI.Source_View.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.ConversationalUI.Source_View.dataView1",
                        $widgetId: "p.ConversationalUI.Source_View.dataView1",
                        class: "mx-name-dataView1 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.10",
                          "scope": "$Source",
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
                              key: "p.ConversationalUI.Source_View.layoutGrid2",
                              $widgetId: "p.ConversationalUI.Source_View.layoutGrid2",
                              class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p.ConversationalUI.Source_View.layoutGrid2$row0",
                                    $widgetId: "p.ConversationalUI.Source_View.layoutGrid2$row0",
                                    class: "row",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.ConversationalUI.Source_View.layoutGrid2$row0$column0",
                                          $widgetId: "p.ConversationalUI.Source_View.layoutGrid2$row0$column0",
                                          class: "col-lg col-md col",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.ConversationalUI.Source_View.text2",
                                                $widgetId: "p.ConversationalUI.Source_View.text2",
                                                class: "mx-name-text2",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Content" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Source_View.dataView1", "source": "object" } } }
                                                  })
                                                ]),
                                                renderMode: "span"
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
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.ConversationalUI.Source_View.actionButton1$visibility",
                              $widgetId: "p.ConversationalUI.Source_View.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Source" }] }, { "type": "literal", "value": "" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Source_View.dataView1", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.ConversationalUI.Source_View.actionButton1",
                                    $widgetId: "p.ConversationalUI.Source_View.actionButton1",
                                    buttonId: "p.ConversationalUI.Source_View.actionButton1",
                                    class: "mx-name-actionButton1",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "link",
                                    role: "button",
                                    buttonClass: "btn-default",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Source" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Source_View.dataView1", "source": "object" } } }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        "Open link"
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "openLink", "argMap": { "$object": { "widget": "$Source", "source": "object" } }, "config": { "schema": "web", "addressAttribute": "ConversationalUI.Source/Source" }, "disabledDuringExecution": true },
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
      ]
    }
  )
]);
const title = selectTranslation([
  "Response Sources"
]);
const classes = "";
const cancelChangesOperationId = "LzdTRC06nlWAgPTBbrEKSA";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
