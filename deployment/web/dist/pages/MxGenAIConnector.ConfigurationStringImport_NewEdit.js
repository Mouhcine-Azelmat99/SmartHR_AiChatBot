import { reactExports, asPluginWidgets, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-iFOPmzlY.js';
import '../AttributeProperty-DPm6A02S.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-DirRMZIL.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { FormGroup, ValidationProperty } from '../FormGroup-bFu0BNb6.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BilSZaU4.js';
import { DataView } from '../DataView-RrZIPNzV.js';
import { Div } from '../Div-DnhZCXw4.js';
import { Text } from '../Text-Ct6rfb-k.js';
import { TextArea } from '../TextArea-CLTGOhN2.js';
import { content as content$1 } from '../MxGenAIConnector.Popup_MxGenAI-D-RTCxJ_.js';
import { AttributeProperty } from '../CTQxk13g-CU8g3epp.js';
import '../CkBXggmw-D1iecObi.js';
import '../uEIG9e6s-VBk3qU43.js';
import '../CxoxYXlg-BJ3P5g_E.js';
import '../bdxqAC6d-BooPaEdW.js';
import '../InlineText-f914ePRH.js';
import '../B6nacfjo-DRlmgVxc.js';
import '../B7_8A3ct-PtP2BrDi.js';
import '../F-L0MxFU-CBWLJP8y.js';
import '../ScrollContainer-DO1bE89X.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $Text, $FormGroup, $TextArea, $ActionButton, $ConditionalVisibilityWrapper } = asPluginWidgets({ Div, DataView, Text, FormGroup, TextArea, ActionButton, ConditionalVisibilityWrapper });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid1",
      $widgetId: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid1$row0",
            $widgetId: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.dataView1",
                        $widgetId: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.dataView1",
                        class: "mx-name-dataView1 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.12",
                          "scope": "$ConfigurationImport",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.text1",
                              $widgetId: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.text1",
                              class: "mx-name-text1",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Paste the key from the Mendix Portal." }, "args": {} }
                                })
                              ]),
                              renderMode: "h4"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.textArea1$formGroup",
                              $widgetId: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.textArea1$formGroup",
                              class: "mx-name-textArea1 mx-textarea",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextArea,
                                  {
                                    key: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.textArea1",
                                    $widgetId: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.textArea1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "MxGenAIConnector.ConfigurationStringImport",
                                      "attribute": "Key",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null
                                    }),
                                    counterMessage: void 0,
                                    maxLength: void 0,
                                    numberOfLines: 5,
                                    autoGrow: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    readOnlyStyle: "control",
                                    textTooLongMessage: void 0,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    ariaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    ariaRequired: void 0,
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.textArea1"
                                    })
                                  }
                                )
                              ],
                              caption: void 0,
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.textArea1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.textArea1"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid2",
                              $widgetId: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid2",
                              class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid2$row0",
                                    $widgetId: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid2$row0",
                                    class: "row",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid2$row0$column0",
                                          $widgetId: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid2$row0$column0",
                                          class: "col-lg col-md col",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.actionButton2",
                                                $widgetId: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.actionButton2",
                                                buttonId: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.actionButton2",
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
                                                  "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "3izk5dv7oFuJvAMoQ003Gw", "closePage": true }, "disabledDuringExecution": true },
                                                  "abortOnServerValidation": true
                                                })
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid2$row0$column1",
                                          $widgetId: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid2$row0$column1",
                                          class: "col-lg-auto col-md col",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.actionButton1$visibility",
                                                $widgetId: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.actionButton1$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.actionButton1",
                                                      $widgetId: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.actionButton1",
                                                      buttonId: "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.actionButton1",
                                                      class: "mx-name-actionButton1 pull-right",
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
                                                        "action": { "type": "callMicroflow", "argMap": { "ConfigurationStringImport": { "widget": "$ConfigurationImport", "source": "object" } }, "config": { "operationId": "+Uv/naZOCl6+/258LGzpFQ", "progress": { "message": selectTranslation([""]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
  "Import key"
]);
const classes = "";
const cancelChangesOperationId = "Owqe7i4rsVa6zQbVEF0Nyg";
const closeButton = "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.actionButton2";
const style = {
  "width": "40vw"
};
const content = {
  ...content$1,
  "MxGenAIConnector.Popup_MxGenAI.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
