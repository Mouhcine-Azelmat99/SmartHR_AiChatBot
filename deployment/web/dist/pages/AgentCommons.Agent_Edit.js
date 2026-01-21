import { reactExports, asPluginWidgets, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-iFOPmzlY.js';
import '../AttributeProperty-DPm6A02S.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-DirRMZIL.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { FormGroup, ValidationProperty } from '../FormGroup-bFu0BNb6.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BilSZaU4.js';
import { Container } from '../Container-PSi6m2QL.js';
import { DataView } from '../DataView-RrZIPNzV.js';
import { TextArea } from '../TextArea-CLTGOhN2.js';
import { TextBox } from '../TextBox-CWp8bmf4.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-B5WEKHCX.js';
import { AttributeProperty } from '../CTQxk13g-CU8g3epp.js';
import '../CkBXggmw-D1iecObi.js';
import '../uEIG9e6s-VBk3qU43.js';
import '../CxoxYXlg-BJ3P5g_E.js';
import '../bdxqAC6d-BooPaEdW.js';
import '../B6nacfjo-DRlmgVxc.js';
import '../B7_8A3ct-PtP2BrDi.js';
import '../F-L0MxFU-CBWLJP8y.js';
import '../ScrollContainer-DO1bE89X.js';

const React = { createElement: reactExports.createElement };
const { $Container, $DataView, $FormGroup, $TextBox, $TextArea, $ActionButton, $ConditionalVisibilityWrapper } = asPluginWidgets({ Container, DataView, FormGroup, TextBox, TextArea, ActionButton, ConditionalVisibilityWrapper });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p.AgentCommons.Agent_Edit.container1",
      $widgetId: "p.AgentCommons.Agent_Edit.container1",
      class: "mx-name-container1 spacing-inner-left-20 spacing-inner-bottom-large spacing-inner-right-large spacing-inner-top",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $DataView,
          {
            key: "p.AgentCommons.Agent_Edit.dataView1",
            $widgetId: "p.AgentCommons.Agent_Edit.dataView1",
            class: "mx-name-dataView1 form-vertical",
            style: void 0,
            tabIndex: void 0,
            object: AssociationObjectProperty({
              "dataSourceId": "p.8",
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
                $FormGroup,
                {
                  key: "p.AgentCommons.Agent_Edit.textBox1$formGroup",
                  $widgetId: "p.AgentCommons.Agent_Edit.textBox1$formGroup",
                  class: "mx-name-textBox1 mx-textbox",
                  style: void 0,
                  control: [
                    /* @__PURE__ */ React.createElement(
                      $TextBox,
                      {
                        key: "p.AgentCommons.Agent_Edit.textBox1",
                        $widgetId: "p.AgentCommons.Agent_Edit.textBox1",
                        inputValue: AttributeProperty({
                          "scope": "p.AgentCommons.Agent_Edit.dataView1",
                          "path": "",
                          "entity": "AgentCommons.Agent",
                          "attribute": "Title",
                          "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                          "isList": false,
                          "validation": null,
                          "formatting": {}
                        }),
                        isPassword: false,
                        placeholder: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                          })
                        ]),
                        mask: "",
                        readOnlyStyle: "control",
                        maxLength: 50,
                        onEnter: void 0,
                        onLeave: void 0,
                        onEnterKeyPress: void 0,
                        ariaLabel: void 0,
                        autocomplete: "on",
                        submitWhileEditing: false,
                        submitDelay: 300,
                        ariaRequired: void 0,
                        tabIndex: void 0,
                        id: DerivedUniqueIdProperty({
                          "widgetId": "p.AgentCommons.Agent_Edit.textBox1"
                        })
                      }
                    )
                  ],
                  caption: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Title" }, "args": {} }
                    })
                  ]),
                  labelFor: DerivedUniqueIdProperty({
                    "widgetId": "p.AgentCommons.Agent_Edit.textBox1"
                  }),
                  width: void 0,
                  orientation: "vertical",
                  hasError: ValidationProperty({
                    "inputWidgetId": "p.AgentCommons.Agent_Edit.textBox1"
                  })
                }
              ),
              /* @__PURE__ */ React.createElement(
                $FormGroup,
                {
                  key: "p.AgentCommons.Agent_Edit.textArea1$formGroup",
                  $widgetId: "p.AgentCommons.Agent_Edit.textArea1$formGroup",
                  class: "mx-name-textArea1 mx-textarea",
                  style: void 0,
                  control: [
                    /* @__PURE__ */ React.createElement(
                      $TextArea,
                      {
                        key: "p.AgentCommons.Agent_Edit.textArea1",
                        $widgetId: "p.AgentCommons.Agent_Edit.textArea1",
                        inputValue: AttributeProperty({
                          "scope": "p.AgentCommons.Agent_Edit.dataView1",
                          "path": "",
                          "entity": "AgentCommons.Agent",
                          "attribute": "Description",
                          "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                          "isList": false,
                          "validation": null
                        }),
                        counterMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        maxLength: 200,
                        numberOfLines: 2,
                        autoGrow: false,
                        placeholder: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                          })
                        ]),
                        readOnlyStyle: "control",
                        textTooLongMessage: TextProperty({
                          "value": selectTranslation([
                            "Value too long."
                          ])
                        }),
                        onEnter: void 0,
                        onLeave: void 0,
                        ariaLabel: void 0,
                        ariaRequired: void 0,
                        submitWhileEditing: false,
                        submitDelay: 300,
                        tabIndex: void 0,
                        id: DerivedUniqueIdProperty({
                          "widgetId": "p.AgentCommons.Agent_Edit.textArea1"
                        })
                      }
                    )
                  ],
                  caption: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                    })
                  ]),
                  labelFor: DerivedUniqueIdProperty({
                    "widgetId": "p.AgentCommons.Agent_Edit.textArea1"
                  }),
                  width: void 0,
                  orientation: "vertical",
                  hasError: ValidationProperty({
                    "inputWidgetId": "p.AgentCommons.Agent_Edit.textArea1"
                  })
                }
              )
            ],
            hideFooter: false,
            footer: [
              /* @__PURE__ */ React.createElement(
                $Container,
                {
                  key: "p.AgentCommons.Agent_Edit.container2",
                  $widgetId: "p.AgentCommons.Agent_Edit.container2",
                  class: "mx-name-container2 row-right",
                  style: void 0,
                  renderMode: "div",
                  onClick: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ActionButton,
                      {
                        key: "p.AgentCommons.Agent_Edit.actionButton2",
                        $widgetId: "p.AgentCommons.Agent_Edit.actionButton2",
                        buttonId: "p.AgentCommons.Agent_Edit.actionButton2",
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
                          "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "//yjiJK+uVahv6MxswA/DA", "closePage": true }, "disabledDuringExecution": true },
                          "abortOnServerValidation": true
                        })
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p.AgentCommons.Agent_Edit.actionButton1$visibility",
                        $widgetId: "p.AgentCommons.Agent_Edit.actionButton1$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.AgentCommons.Agent_Edit.actionButton1",
                              $widgetId: "p.AgentCommons.Agent_Edit.actionButton1",
                              buttonId: "p.AgentCommons.Agent_Edit.actionButton1",
                              class: "mx-name-actionButton1 pull-right spacing-outer-left",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-primary",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "callMicroflow", "argMap": { "Agent": { "widget": "$Agent", "source": "object" } }, "config": { "operationId": "5EaBdMNcPF+rFSp/MDiqVg", "progress": { "message": selectTranslation(["Creating agent.."]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
      ],
      ariaHidden: false
    }
  )
]);
const title = selectTranslation([
  "Edit agent details"
]);
const classes = "";
const cancelChangesOperationId = "mTvDgwhjHleWm4gAssWcwQ";
const closeButton = "p.AgentCommons.Agent_Edit.actionButton2";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
