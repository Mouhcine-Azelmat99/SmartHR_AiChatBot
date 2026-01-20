import { reactExports, asPluginWidgets, selectTranslation } from '../index-B-pQLZz2.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C1uYYDJ5.js';
import { ActionButton, ActionProperty } from '../ActionButton-C47bDiwH.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BrlLyOx6.js';
import '../AttributeProperty-CBmdvzfK.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-QeaM9GtQ.js';
import { TextProperty } from '../TextProperty-ukMsrrP8.js';
import { FormGroup, ValidationProperty } from '../FormGroup-yCagykDW.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C-2xhd5O.js';
import { DataView } from '../DataView-DtIsQy7l.js';
import { Div } from '../Div-C2k8MuH7.js';
import { Text } from '../Text-5NmEA291.js';
import { TextArea } from '../TextArea-DdodcWfx.js';
import { content as content$1 } from '../MxGenAIConnector.Popup_MxGenAI-BIqoV9pb.js';
import { AttributeProperty } from '../CTQxk13g-BDTc581w.js';
import '../CkBXggmw-CEa7-Kz-.js';
import '../uEIG9e6s-CoI72Q4o.js';
import '../CxoxYXlg-rXnL4f6K.js';
import '../bdxqAC6d-ISZWqfJE.js';
import '../InlineText-CcVi-f0x.js';
import '../B6nacfjo-Di-qGXS2.js';
import '../B7_8A3ct-CdkfAVjR.js';
import '../F-L0MxFU-D5sOd2X2.js';
import '../ScrollContainer-B-pXvHDA.js';

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
