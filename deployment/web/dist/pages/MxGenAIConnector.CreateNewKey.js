import { reactExports, asPluginWidgets, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { Container } from '../Container-PSi6m2QL.js';
import { Div } from '../Div-DnhZCXw4.js';
import { Text } from '../Text-Ct6rfb-k.js';
import { content as content$1 } from '../MxGenAIConnector.Popup_MxGenAI-D-RTCxJ_.js';
import '../InlineText-f914ePRH.js';
import '../ScrollContainer-DO1bE89X.js';

const React = { createElement: reactExports.createElement };
const { $Div, $Container, $Text, $ActionButton } = asPluginWidgets({ Div, Container, Text, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MxGenAIConnector.CreateNewKey.layoutGrid1",
      $widgetId: "p.MxGenAIConnector.CreateNewKey.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MxGenAIConnector.CreateNewKey.layoutGrid1$row0",
            $widgetId: "p.MxGenAIConnector.CreateNewKey.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MxGenAIConnector.CreateNewKey.layoutGrid1$row0$column0",
                  $widgetId: "p.MxGenAIConnector.CreateNewKey.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.MxGenAIConnector.CreateNewKey.container1",
                        $widgetId: "p.MxGenAIConnector.CreateNewKey.container1",
                        class: "mx-name-container1",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.MxGenAIConnector.CreateNewKey.text31",
                              $widgetId: "p.MxGenAIConnector.CreateNewKey.text31",
                              class: "mx-name-text31 alert-description spacing-outer-bottom-none",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Visit the Mendix Portal to connect to your GenAI Resources or request a new GenAI Resource." }, "args": {} }
                                })
                              ]),
                              renderMode: "p"
                            }
                          )
                        ],
                        ariaHidden: false
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.MxGenAIConnector.CreateNewKey.container2",
                        $widgetId: "p.MxGenAIConnector.CreateNewKey.container2",
                        class: "mx-name-container2 spacing-outer-top-medium",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MxGenAIConnector.CreateNewKey.actionButton1",
                              $widgetId: "p.MxGenAIConnector.CreateNewKey.actionButton1",
                              buttonId: "p.MxGenAIConnector.CreateNewKey.actionButton1",
                              class: "mx-name-actionButton1",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-primary",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Go to Mendix Portal" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://genai.home.mendix.com/" }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
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
            ]
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Create new key"
]);
const classes = "";
const cancelChangesOperationId = "chMcp4remFiAVu2AXaCsCw";
const style = {
  "width": "40vw"
};
const content = {
  ...content$1,
  "MxGenAIConnector.Popup_MxGenAI.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
