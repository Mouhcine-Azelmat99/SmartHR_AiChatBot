import { reactExports, asPluginWidgets, selectTranslation } from '../index-B-pQLZz2.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C1uYYDJ5.js';
import { ActionButton, ActionProperty } from '../ActionButton-C47bDiwH.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BrlLyOx6.js';
import '../AttributeProperty-CBmdvzfK.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-QeaM9GtQ.js';
import { TextProperty } from '../TextProperty-ukMsrrP8.js';
import { FormGroup, ValidationProperty } from '../FormGroup-yCagykDW.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C-2xhd5O.js';
import { Container } from '../Container-CTbE-yQS.js';
import { DataView } from '../DataView-DtIsQy7l.js';
import { DatePicker } from '../DatePicker-CzOSdMBh.js';
import { Div } from '../Div-C2k8MuH7.js';
import { Text } from '../Text-5NmEA291.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-D5lHkh-a.js';
import { AttributeProperty } from '../CTQxk13g-BDTc581w.js';
import '../CkBXggmw-CEa7-Kz-.js';
import '../uEIG9e6s-CoI72Q4o.js';
import '../CxoxYXlg-rXnL4f6K.js';
import '../bdxqAC6d-ISZWqfJE.js';
import '../D2Vzasyw-shqqrM0Q.js';
import '../DxNyuBBG-CO3699Ph.js';
import '../B7_8A3ct-CdkfAVjR.js';
import '../F-L0MxFU-D5sOd2X2.js';
import '../InlineText-CcVi-f0x.js';
import '../ScrollContainer-B-pXvHDA.js';

const React = { createElement: reactExports.createElement };
const { $DataView, $Div, $Container, $Text, $FormGroup, $DatePicker, $ActionButton, $ConditionalVisibilityWrapper } = asPluginWidgets({ DataView, Div, Container, Text, FormGroup, DatePicker, ActionButton, ConditionalVisibilityWrapper });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p.ConversationalUI.TraceFiltering_EditDate.dataView6",
      $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.dataView6",
      class: "mx-name-dataView6 form-vertical",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
        "dataSourceId": "p.6",
        "scope": "$TraceFiltering",
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
            key: "p.ConversationalUI.TraceFiltering_EditDate.layoutGrid1",
            $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.layoutGrid1",
            class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.ConversationalUI.TraceFiltering_EditDate.layoutGrid1$row0",
                  $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.layoutGrid1$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.ConversationalUI.TraceFiltering_EditDate.layoutGrid1$row0$column0",
                        $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.layoutGrid1$row0$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.TraceFiltering_EditDate.container2",
                              $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.container2",
                              class: "mx-name-container2 filter-date-input-wrapper",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.TraceFiltering_EditDate.container4",
                                    $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.container4",
                                    class: "mx-name-container4",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.ConversationalUI.TraceFiltering_EditDate.text2",
                                          $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.text2",
                                          class: "mx-name-text2 font-weight-semibold",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Start time from" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.TraceFiltering_EditDate.container6",
                                          $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.container6",
                                          class: "mx-name-container6 row-left-aligned",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_EditDate.datePicker1$formGroup",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.datePicker1$formGroup",
                                                class: "mx-name-datePicker1 filter-date-input mx-datepicker",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $DatePicker,
                                                    {
                                                      key: "p.ConversationalUI.TraceFiltering_EditDate.datePicker1",
                                                      $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.datePicker1",
                                                      mode: "date",
                                                      showCalendarButton: true,
                                                      inputValue: AttributeProperty({
                                                        "scope": "p.ConversationalUI.TraceFiltering_EditDate.dataView6",
                                                        "path": "",
                                                        "entity": "ConversationalUI.TraceFiltering",
                                                        "attribute": "DateFrom",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
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
                                                      ariaLabel: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      ariaRequired: void 0,
                                                      tabIndex: void 0,
                                                      id: DerivedUniqueIdProperty({
                                                        "widgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker1"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: void 0,
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker1"
                                                }),
                                                width: void 0,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker1"
                                                })
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_EditDate.datePicker7$formGroup",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.datePicker7$formGroup",
                                                class: "mx-name-datePicker7 filter-time-input mx-datepicker",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $DatePicker,
                                                    {
                                                      key: "p.ConversationalUI.TraceFiltering_EditDate.datePicker7",
                                                      $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.datePicker7",
                                                      mode: "time",
                                                      showCalendarButton: false,
                                                      inputValue: AttributeProperty({
                                                        "scope": "p.ConversationalUI.TraceFiltering_EditDate.dataView6",
                                                        "path": "",
                                                        "entity": "ConversationalUI.TraceFiltering",
                                                        "attribute": "DateFrom",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
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
                                                      ariaLabel: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      ariaRequired: void 0,
                                                      tabIndex: void 0,
                                                      id: DerivedUniqueIdProperty({
                                                        "widgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker7"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: void 0,
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker7"
                                                }),
                                                width: void 0,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker7"
                                                })
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
                                    key: "p.ConversationalUI.TraceFiltering_EditDate.container3",
                                    $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.container3",
                                    class: "mx-name-container3",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.ConversationalUI.TraceFiltering_EditDate.text1",
                                          $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.text1",
                                          class: "mx-name-text1 font-weight-semibold",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "End time to" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.TraceFiltering_EditDate.container5",
                                          $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.container5",
                                          class: "mx-name-container5 row-left-aligned",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_EditDate.datePicker4$formGroup",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.datePicker4$formGroup",
                                                class: "mx-name-datePicker4 filter-date-input mx-datepicker",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $DatePicker,
                                                    {
                                                      key: "p.ConversationalUI.TraceFiltering_EditDate.datePicker4",
                                                      $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.datePicker4",
                                                      mode: "date",
                                                      showCalendarButton: true,
                                                      inputValue: AttributeProperty({
                                                        "scope": "p.ConversationalUI.TraceFiltering_EditDate.dataView6",
                                                        "path": "",
                                                        "entity": "ConversationalUI.TraceFiltering",
                                                        "attribute": "DateTo",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
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
                                                      ariaLabel: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      ariaRequired: void 0,
                                                      tabIndex: void 0,
                                                      id: DerivedUniqueIdProperty({
                                                        "widgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker4"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: void 0,
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker4"
                                                }),
                                                width: void 0,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker4"
                                                })
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_EditDate.datePicker10$formGroup",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.datePicker10$formGroup",
                                                class: "mx-name-datePicker10 filter-time-input mx-datepicker",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $DatePicker,
                                                    {
                                                      key: "p.ConversationalUI.TraceFiltering_EditDate.datePicker10",
                                                      $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.datePicker10",
                                                      mode: "time",
                                                      showCalendarButton: false,
                                                      inputValue: AttributeProperty({
                                                        "scope": "p.ConversationalUI.TraceFiltering_EditDate.dataView6",
                                                        "path": "",
                                                        "entity": "ConversationalUI.TraceFiltering",
                                                        "attribute": "DateTo",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
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
                                                      ariaLabel: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      ariaRequired: void 0,
                                                      tabIndex: void 0,
                                                      id: DerivedUniqueIdProperty({
                                                        "widgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker10"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: void 0,
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker10"
                                                }),
                                                width: void 0,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker10"
                                                })
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
          $Container,
          {
            key: "p.ConversationalUI.TraceFiltering_EditDate.container73",
            $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.container73",
            class: "mx-name-container73 pop-up-footer-flex-container",
            style: void 0,
            renderMode: "div",
            onClick: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Container,
                {
                  key: "p.ConversationalUI.TraceFiltering_EditDate.container7",
                  $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.container7",
                  class: "mx-name-container7 pop-up-flex-items",
                  style: void 0,
                  renderMode: "div",
                  onClick: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.TraceFiltering_EditDate.container8",
                        $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.container8",
                        class: "mx-name-container8 row-left-aligned",
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
                        key: "p.ConversationalUI.TraceFiltering_EditDate.container1",
                        $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.container1",
                        class: "mx-name-container1 row-right-aligned",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.ConversationalUI.TraceFiltering_EditDate.actionButton2",
                              $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.actionButton2",
                              buttonId: "p.ConversationalUI.TraceFiltering_EditDate.actionButton2",
                              class: "mx-name-actionButton2",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "txFTjzhka1Gv3cUujM+Wng", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.ConversationalUI.TraceFiltering_EditDate.actionButton1$visibility",
                              $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.ConversationalUI.TraceFiltering_EditDate.actionButton1",
                                    $widgetId: "p.ConversationalUI.TraceFiltering_EditDate.actionButton1",
                                    buttonId: "p.ConversationalUI.TraceFiltering_EditDate.actionButton1",
                                    class: "mx-name-actionButton1",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-primary",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Apply" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "TraceFiltering": { "widget": "$TraceFiltering", "source": "object" } }, "config": { "operationId": "L+HQj+FcFV6WsCEsid3JKQ", "progress": { "message": selectTranslation(["Updating graph.."]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
      ]
    }
  )
]);
const title = selectTranslation([
  "Custom time frame"
]);
const classes = "";
const cancelChangesOperationId = "G6L9gEsn7lucqGFjqIz3XQ";
const closeButton = "p.ConversationalUI.TraceFiltering_EditDate.actionButton2";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
