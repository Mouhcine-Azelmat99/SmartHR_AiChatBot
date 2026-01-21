import { reactExports, asPluginWidgets, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BilSZaU4.js';
import { Container } from '../Container-PSi6m2QL.js';
import { Div } from '../Div-DnhZCXw4.js';
import { Text } from '../Text-Ct6rfb-k.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-B5WEKHCX.js';
import '../InlineText-f914ePRH.js';
import '../ScrollContainer-DO1bE89X.js';

const React = { createElement: reactExports.createElement };
const { $Div, $Container, $Text, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, Container, Text, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1",
      $widgetId: "p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1$row0",
            $widgetId: "p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1$row0$column0",
                  $widgetId: "p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.AgentCommons.Version_OverwriteConfirmation.container1",
                        $widgetId: "p.AgentCommons.Version_OverwriteConfirmation.container1",
                        class: "mx-name-container1 spacing-outer-bottom-large",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.AgentCommons.Version_OverwriteConfirmation.text1",
                              $widgetId: "p.AgentCommons.Version_OverwriteConfirmation.text1",
                              class: "mx-name-text1",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Are you sure that you want to overwrite your unsaved draft?" }, "args": {} }
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
          }
        ),
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1$row1",
            $widgetId: "p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1$row1",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1$row1$column0",
                  $widgetId: "p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1$row1$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p.AgentCommons.Version_OverwriteConfirmation.actionButton1$visibility",
                        $widgetId: "p.AgentCommons.Version_OverwriteConfirmation.actionButton1$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.AgentCommons.Version_OverwriteConfirmation.actionButton1",
                              $widgetId: "p.AgentCommons.Version_OverwriteConfirmation.actionButton1",
                              buttonId: "p.AgentCommons.Version_OverwriteConfirmation.actionButton1",
                              class: "mx-name-actionButton1 pull-right spacing-outer-left",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-primary",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Overwrite" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "callMicroflow", "argMap": { "PageHelper": { "widget": "$PageHelper", "source": "object" }, "Version": { "widget": "$Version", "source": "object" } }, "config": { "operationId": "snCt5+iXY1euOlPC01YPaA", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $ActionButton,
                      {
                        key: "p.AgentCommons.Version_OverwriteConfirmation.actionButton2",
                        $widgetId: "p.AgentCommons.Version_OverwriteConfirmation.actionButton2",
                        buttonId: "p.AgentCommons.Version_OverwriteConfirmation.actionButton2",
                        class: "mx-name-actionButton2 pull-right",
                        style: void 0,
                        tabIndex: void 0,
                        renderType: "button",
                        role: void 0,
                        buttonClass: "btn-default",
                        caption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
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
]);
const title = selectTranslation([
  "Overwrite unsaved draft"
]);
const classes = "";
const cancelChangesOperationId = "UcOF2TB5tlyKahaVDts22g";
const closeButton = "p.AgentCommons.Version_OverwriteConfirmation.actionButton2";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
